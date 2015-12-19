class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :answer, :question

  def question
    ActiveModel::SerializableResource.new(object.question).serializable_hash
  end
end
