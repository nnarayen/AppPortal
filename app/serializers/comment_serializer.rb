class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :name

  def name
    object.admin.name
  end
end
