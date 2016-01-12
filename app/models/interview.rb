# == Schema Information
#
# Table name: interviews
#
#  id         :integer          not null, primary key
#  timeslot   :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Interview < ActiveRecord::Base
  has_many :applicants

  validate :under_capacity
  validates :timeslot, presence: true

  default_scope { order "timeslot" }

  # Interview capacity by stage
  INTERVIEW_CAPACITY = { 0 => 4, 1 => 4, 2 => 1 }

  def self.available
    Interview.all.select(&:available?)
  end

  def available?
    applicants.length < Interview.capacity
  end

  def serialize
    InterviewSerializer.new(self)
  end

  private

  def under_capacity
    if applicants.size >= Interview.capacity
      errors.add(:capacity, "Interview slot filled, please refresh.")
    end
  end

  def self.capacity
    INTERVIEW_CAPACITY[Settings.instance.stage]
  end
end
