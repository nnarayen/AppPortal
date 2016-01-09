# == Schema Information
#
# Table name: settings
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  stage      :integer          default(0)
#  deadline   :date
#

class Settings < ActiveRecord::Base
  acts_as_singleton
end
