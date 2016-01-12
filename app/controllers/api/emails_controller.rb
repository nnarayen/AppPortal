module Api
  class EmailsController < Api::BaseController
    before_action :authenticate_admin!

    def fetch
      render json: Email.current.send(params[:category]).to_json
    end

    def update
      Email.current.update(params[:category] => params[:email])
      render_json_message(:ok, message: "Email content saved!",
                               resource: Email.current.send(params[:category]))
    rescue
      render_json_message(:forbidden, errors: ["Error saving email content"])
    end

    def send_emails
      Email.current.update(params[:category] => params[:email])
      ApplicantStatusMailerJob.new.async.perform(params[:category])
      render_json_message(:ok, message: "Emails successfully sent!",
                               resource: Email.current.send(params[:category]))
    rescue
      render_json_message(:forbidden, errors: ["Error sending emails"])
    end
  end
end
