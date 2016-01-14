# == Schema Information
#
# Table name: responses
#
#  id           :integer          not null, primary key
#  question_id  :integer
#  applicant_id :integer
#  answer       :string           default("")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Response < ActiveRecord::Base
  belongs_to :applicant
  belongs_to :question
end
