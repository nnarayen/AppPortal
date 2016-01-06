# == Schema Information
#
# Table name: emails
#
#  id         :integer          not null, primary key
#  stage      :integer
#  accepted   :text             default("")
#  rejected   :text             default("")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Email < ActiveRecord::Base
  scope :current, -> { find_by(stage: Settings.instance.stage) }
end
