module Api
  class PasswordsController < Api::BaseController
    def send_reset
      applicant = Applicant.find_by!(email: params[:email])
      ApplicantResetPasswordJob.new.async.perform(applicant)
      render_json_message(:ok, message: "Reset instructions successfully sent!",
                               to: root_path)
    rescue
      render_json_message(:forbidden, errors: ["Invalid email provided."])
    end

    def reset
      applicant = Applicant.find_by!(token: params[:token])
      applicant.update_password(password_params)
      render_json_message(:ok, message: "Password successfully updated!",
                               to: root_path)
    rescue
      errors = applicant.try(:errors).try(:full_messages)
      errors = ["Invalid token provided."] if errors.blank?
      render_json_message(:forbidden, errors: errors)
    end

    private

    def password_params
      params.permit(:password, :password_confirmation)
    end
  end
end
