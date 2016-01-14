module Api
  class SettingsController < Api::BaseController
    before_action :authenticate_admin!

    def index
      render json: Settings.instance, serializer: SettingsSerializer
    end

    # Actually used as the update method since Settings is a singleton model
    def create
      Settings.instance.update!(update_params)
      render_json_message(:ok, message: "Settings successfully updated!",
                               resource: Settings.instance.serialize)
    rescue
      render_json_message(:forbidden, errors: ["Unable to update settings."])
    end

    def advance
      Applicant.accepted.map(&:advance)
      Settings.instance.update!(update_params)
      render_json_message(:ok, message: "Portal successfully advanced!",
                               resource: Settings.instance.serialize)
    rescue
      render_json_message(:forbidden, errors: ["Unable to advance portal."])
    end

    def reset
      Applicant.destroy_all
      Settings.instance.update!(stage: 0)
      render_json_message(:ok, message: "Portal successfully reset!",
                               resource: Settings.instance.serialize)
    rescue
      render_json_message(:forbidden, errors: ["Error resetting portal."])
    end

    private

    def update_params
      params.permit(:stage, :deadline)
    end
  end
end
