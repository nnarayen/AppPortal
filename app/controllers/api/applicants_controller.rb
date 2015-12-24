module Api
  class ApplicantsController < Api::BaseController
    before_action :authenticate_admin!, only: [:index, :comment]
    before_action :authenticate_applicant!, only: [:update, :upload, :submit]

    DECISION_TYPES = { rejected: 1, undecided: 2, accepted: 3 }

    def index
      submitted = Applicant.all.submitted
      render json: submitted, each_serializer: ApplicantSerializer, root: false
    end

    def show
      applicant = Applicant.find(params[:id])
      render json: applicant, serializer: ApplicantSerializer, root: false
    end

    def update
      applicant = Applicant.find(params[:id])
      applicant.update!(update_params)
      render_json_message(:ok, message: "Application questions saved!",
                               resource: serialized_message(applicant))
    rescue
      render_json_message(:ok, errors: applicant.errors.full_messages)
    end

    def upload
      applicant = Applicant.find(params[:applicant_id])
      upload = Cloudinary::Uploader.upload(params[:file].path).symbolize_keys
      applicant.update!(params[:category] => upload[:secure_url])
      render_json_message(:ok, message: "#{params[:category].capitalize} uploaded!",
                               resource: serialized_message(applicant))
    rescue
      render_json_message(:forbidden, errors: ["Error uploading document."])
    end

    def submit
      applicant = Applicant.find(params[:applicant_id])
      applicant.update(update_params)
      if valid_responses?(applicant.responses) && applicant.valid?(:submit)
        applicant.update(submit: true, decisions: Array.new(5, DECISION_TYPES[:undecided]))
        render_json_message(:ok, message: "Application submitted!",
                                 resource: serialized_message(applicant))
      else
        render_json_message(:forbidden, errors: ["No field can be left blank."])
      end
    end

    def decide
      applicant = Applicant.find(params[:applicant_id])
      applicant.decisions[current_user.decision] = params[:decision]
      applicant.save
      render_json_message(:ok, message: "Successfully made decision!",
                               resource: serialized_message(applicant),
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

    def valid_responses?(responses)
      responses.all? { |response| response[:answer].present? }
    end
  end
end
