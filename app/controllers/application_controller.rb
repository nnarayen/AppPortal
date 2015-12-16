class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Devise authentication group for any signed in user
  devise_group :user, contains: [:applicant, :admin]

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
      return applicant_apply_path(resource)
    else
      return root_path
    end
  end

  def serialized_message(resource)
    ActiveModel::SerializableResource.new(resource).serializable_hash if resource
  end
end
