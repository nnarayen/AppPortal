class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :answer

  has_one :question
end
