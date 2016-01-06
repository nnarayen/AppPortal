module Api
  class ApplicantsController < Api::BaseController
    before_action :authenticate_admin!, only: [:index, :comment]
    before_action :authenticate_applicant!, only: [:update, :upload, :submit]

    def index
      submitted = Applicant.all.submitted.order(:id)
      render json: submitted, each_serializer: ApplicantSerializer, root: false
    end

    def show
      applicant = Applicant.find(params[:id])
      render json: applicant, serializer: ApplicantSerializer
    end

    def update
      applicant = Applicant.find(params[:id])
      applicant.update!(update_params)
      render_json_message(:ok, message: "Application questions saved!",
                               resource: applicant.serialize)
    rescue
      render_json_message(:ok, errors: applicant.errors.full_messages)
    end

    def upload
      applicant = Applicant.find(params[:applicant_id])
      applicant.upload(upload_params.symbolize_keys)
      render_json_message(:ok, message: "#{params[:category].capitalize} uploaded!",
                               resource: applicant.serialize)
    rescue
      render_json_message(:forbidden, errors: ["Error uploading document."])
    end

    def submit
      applicant = Applicant.find(params[:applicant_id])
      if applicant.attempt_submit(update_params)
        render_json_message(:ok, message: "Application submitted!",
                                 resource: applicant.serialize)
      else
        render_json_message(:forbidden, errors: ["No field can be left blank."])
      end
    end

    def decide
      applicant = Applicant.find(params[:applicant_id])
      applicant.decide(current_user.decision, params[:decision])
      render_json_message(:ok, message: "Successfully made decision!",
                               resource: applicant.serialize,
                               to: admins_overview_path)
    rescue
      render_json_message(:forbidden, errors: ["Error making decision."])
    end

    private

    def update_params
      params[:responses_attributes] = params.delete(:responses)
      params.permit(:first_name, :last_name, :year, :gpa, :units, :phone,
                    :major, :resume, :picture, responses_attributes: [:id, :answer])
    end

    def upload_params
      params.permit(:category, :file)
    end
  end
end
