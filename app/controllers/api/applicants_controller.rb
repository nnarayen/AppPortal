module Api
  class ApplicantsController < Api::BaseController
    def show
      applicant = Applicant.find(params[:id])
      render json: applicant, serializer: ApplicantSerializer, root: false
    end

    def update
      applicant = Applicant.find(params[:id])
      if applicant.update(update_params)
        render_json_message(:ok, resource: serialized_message(applicant))
      else
        render_json_message(:forbidden, errors: applicant.errors.full_messages)
      end
    end

    def fetch
      responses = Applicant.find(params[:applicant_id]).responses.order(:id)
      render json: responses, each_serializer: ResponseSerializer, root: false
    end

    def save
      JSON.parse(params[:responses], symbolize_names: true).each do |response|
        Response.find(response[:id]).update!(answer: response[:answer])
      end
      responses = Applicant.find(params[:applicant_id]).responses.order(:id)
      render_json_message(:ok, message: "Application questions saved!",
                               resource: serialized_message(responses))
    rescue
      render_json_message(:forbidden, errors: ["Error while saving application."])
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

    private

    def update_params
      params.permit(:first_name, :last_name, :year, :gpa, :units, :phone)
    end
  end
end
