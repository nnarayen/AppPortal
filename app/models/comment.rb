# == Schema Information
#
# Table name: comments
#
#  id           :integer          not null, primary key
#  applicant_id :integer
#  admin_id     :integer
#  text         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ActiveRecord::Base
  belongs_to :applicant
  belongs_to :admin

  validates :text, presence: true
end
