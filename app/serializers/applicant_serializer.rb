class ApplicantSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :year, :major, :gpa, :units, :phone, :resume, :picture

  has_many :responses

  def responses
    object.responses.sort_by(&:id)
  end
end
