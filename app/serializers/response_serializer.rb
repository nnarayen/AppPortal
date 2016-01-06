class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :answer, :question

  def question
    QuestionSerializer.new(object.question)
  end
end
