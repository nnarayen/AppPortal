# Used for admin pages where we don't need too much information per app
class SimpleAppSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :year, :major, :gpa, :decisions, :status, :picture

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
