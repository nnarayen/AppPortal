class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Devise authentication group for any signed in user
  devise_group :user, contains: [:applicant, :admin]

  # Handle unauthorized requests
  rescue_from(CanCan::AccessDenied) do
    redirect_to root_path
  end

  def render_json_message(status, options = {})
    render json: {
      message: options[:message],
      resource: options[:resource],
      to: options[:to],
      errors: options[:errors]
    }, status: status
  end

  def redirect_user_path(resource)
    if resource.is_a?(Applicant)
      return applicant_apply_path(resource) if Settings.instance.stage == 0
      resource.current? ? applicant_interview_path(resource) : applicant_status_path(resource)
    else
      admins_overview_path
    end
  end
end
