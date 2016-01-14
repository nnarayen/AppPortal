# Used for admin pages where we don't need too much information per app
class SimpleAppSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :year, :major, :gpa, :decisions, :status

  def full_name
    "#{object.first_name} #{object.last_name}"
  end

  def status
    [:rejected?, :undecided?, :accepted?].each.with_index do |type, index|
      return index if object.send(type)
    end
  end
end
