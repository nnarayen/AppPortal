# == Schema Information
#
# Table name: settings
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  stage      :integer          default(0)
#  deadline   :datetime
#

class Settings < ActiveRecord::Base
  acts_as_singleton

  validates :stage, numericality: { less_than: 3 }

  def format_stage
    stages = %w(resume group personal)
    stages[stage]
  end

  def serialize
    SettingsSerializer.new(self)
  end
end
