class SettingsSerializer < ActiveModel::Serializer
  attributes :stage, :formatted_stage, :deadline

  def formatted_stage
    object.format_stage.capitalize
  end
end
