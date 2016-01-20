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

  validate :capacity?
  validates :timeslot, presence: true

  default_scope { order "timeslot" }

  # Interview capacity by stage
  INTERVIEW_CAPACITY = { 0 => 4, 1 => 1, 2 => 1 }

  def self.available
    Interview.all.select(&:available?)
  end

  def available?
    applicants.length < Interview.capacity
  end

  def serialize
    InterviewSerializer.new(self)
  end

  def format_timeslot
    timeslot.strftime("%a %b %d, %I:%M %p")
  end

  private

  def capacity?
    errors.add(:capacity, "Interview slot filled.") unless available?
  end

  def self.capacity
    INTERVIEW_CAPACITY[Settings.instance.stage]
  end
end
