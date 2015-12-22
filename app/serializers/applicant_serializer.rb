class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :year, :major, :gpa, :units, :phone, :resume, :picture
  attributes :decisions, :full_name

  has_many :responses

  def responses
    object.responses.sort_by(&:id)
  end

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
