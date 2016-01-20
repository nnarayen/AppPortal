# == Schema Information
#
# Table name: applicants
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string
#  last_name              :string
#  year                   :string
#  major                  :string
#  gpa                    :integer
#  units                  :integer
#  phone                  :string
#  resume                 :string
#  picture                :string
#  submit                 :boolean
#  decisions              :integer          default([]), is an Array
#  stage                  :integer          default(0)
#  interview_id           :integer
#

class Applicant < ActiveRecord::Base
  include PgSearch

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  pg_search_scope :filter,
    against: [:first_name, :last_name],
    using: {
      tsearch: { prefix: true }
    }

  has_many :responses
  accepts_nested_attributes_for :responses

  has_many :comments
  belongs_to :interview, dependent: :destroy

  before_create :generate_responses

  validates :password_confirmation, presence: true, if: :password_required?
  validates :first_name, :last_name, :year, :major, presence: true, on: :submit
  validates :gpa, :units, :phone, :resume, :picture, presence: true, on: :submit
  validates :stage, numericality: { less_than: 3 }

  validates_associated :interview, if: :interview_id_changed?

  scope :submitted, -> { where(submit: true) }
  scope :current, -> { where(stage: Settings.instance.stage) }

  # Decision type mappings
  DECISION_TYPES = { rejected: 0, undecided: 1, accepted: 2 }

  # Cutoff for decision types
  DECISION_CUTOFFS = { rejected: 3, accepted: 4 }

  def upload(category:, file:)
    upload = Cloudinary::Uploader.upload(file.path).symbolize_keys
    update!(category => upload[:secure_url])
  end

  def attempt_submit(submit_params)
    update(submit_params)
    arr = Array.new(5, DECISION_TYPES[:undecided])
    update(submit: true, decisions: arr) if valid_responses? && valid?(:submit)
  end

  def decide(index, decision)
    decisions[index] = decision
    save!
  end

  def add_comment(admin_id, text)
    comments << Comment.create!(admin_id: admin_id, text: text)
  end

  def self.accepted
    current.select(&:accepted?)
  end

  def accepted?
    decisions.count(DECISION_TYPES[:accepted]) >= DECISION_CUTOFFS[:accepted]
  end

  def self.rejected
    current.select(&:rejected?)
  end

  def rejected?
    decisions.count(DECISION_TYPES[:rejected]) >= DECISION_CUTOFFS[:rejected]
  end

  def undecided?
    !(accepted? || rejected?)
  end

  def serialize
    ApplicantSerializer.new(self)
  end

  def current?
    stage == Settings.instance.stage
  end

  def schedule_interview(interview:)
    update!(interview_id: interview)
  end

  def advance
    update!(stage: stage + 1)
  end

  private

  def generate_responses
    Question.find_each do |question|
      responses << Response.create(applicant_id: id, question_id: question.id)
    end
  end

  def valid_responses?
    responses.all? { |response| response[:answer].present? }
  end
end
