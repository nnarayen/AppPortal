class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :year, :major, :gpa, :units, :phone
  attributes :resume, :picture, :email, :submit

  has_many :responses, :comments

  def responses
    object.responses.sort_by(&:id)
  end

  def comments
    object.comments.sort_by(&:id)
  end
end
