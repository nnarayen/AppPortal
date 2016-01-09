class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :admin

  def admin
    object.admin.name
  end
end
