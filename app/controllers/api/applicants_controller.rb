module Api
  class ApplicantsController < Api::BaseController
    before_action :authenticate_user!, only: [:show]
    before_action :authenticate_admin!, only: [:index, :decide, :comment]
    before_action :authenticate_applicant!, only: [:update, :upload, :submit]

    def index
      applicants = Applicant.all.submitted.current
      applicants = applicants.filter(params[:filter]) if params[:filter].present?
      render json: applicants.sort_by(&:status).reverse, each_serializer: SimpleAppSerializer
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
      render_json_message(:forbidden, errors: applicant.errors.full_messages)
    end

    def upload
      applicant = Applicant.find(params[:applicant_id])
      applicant.upload(upload_params.symbolize_keys)
      render_json_message(:ok, message: "#{params[:category].capitalize} uploaded!",
                               resource: applicant.send(params[:category]))
    rescue
      render_json_message(:forbidden, errors: ["Error uploading document."])
    end

    def submit
      applicant = Applicant.find(params[:applicant_id])
      if applicant.attempt_submit(update_params)
        render_json_message(:ok, message: "Application submitted!",
                                 resource: applicant.serialize,
                                 to: applicant_apply_path(applicant))
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

    def comment
      applicant = Applicant.find(params[:applicant_id])
      applicant.add_comment(current_user.id, params[:text])
      render_json_message(:ok, message: "Comment submitted!",
                               resource: applicant.serialize)
    rescue
      render_json_message(:forbidden, errors: ["Error posting comment."])
    end

    def schedule
      applicant = Applicant.find(params[:applicant_id])
      applicant.schedule_interview(interview_params.symbolize_keys)
      render_json_message(:ok, message: "Interview scheduled!",
                               to: applicant_interview_path(applicant))
    rescue
      errors = applicant.errors.full_messages
      errors << ["Interview can't be blank"] if errors.blank?
      render_json_message(:forbidden, errors: errors)
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

    def interview_params
      params.permit(:interview)
    end
  end
end
