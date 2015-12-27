class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :year, :major, :gpa, :units, :phone
  attributes :resume, :picture, :email, :decisions, :full_name, :status

  has_many :responses

  def responses
    object.responses.sort_by(&:id)
  end

  def full_name
    "#{object.first_name} #{object.last_name}"
  end

  def status
    [:rejected?, :undecided?, :accepted?].each.with_index do |type, index|
      return index if object.send(type)
    end
  end
end
