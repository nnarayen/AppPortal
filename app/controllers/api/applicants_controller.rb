module Api
  class ApplicantsController < Api::BaseController
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
        applicant.update(submit: true)
        render_json_message(:ok, message: "Application submitted!",
                                 resource: serialized_message(applicant))
      else
        render_json_message(:forbidden, errors: ["No question can be left blank."])
      end
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
