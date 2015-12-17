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
#

class Applicant < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :responses

  before_create :generate_responses

  validates :password_confirmation, presence: true, if: :password_required?

  private

  def generate_responses
    Question.find_each do |question|
      responses << Response.create(applicant_id: id, question_id: question.id)
    end
  end
end
