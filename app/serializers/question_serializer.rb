class QuestionSerializer < ActiveModel::Serializer
  attributes :title, :qtype, :category, :limit
end
