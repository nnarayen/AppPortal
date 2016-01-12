class InterviewSerializer < ActiveModel::Serializer
  attributes :id, :timeslot

  has_many :applicants
end
