class ApplicantSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :year, :major, :gpa, :units, :phone
end
