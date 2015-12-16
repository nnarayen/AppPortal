module Api
  class ApplicantsController < Api::BaseController
    def show
      applicant = Applicant.find(params[:id])
      render json: applicant, serializer: ApplicantSerializer, root: false
    end

    def update
      applicant = Applicant.find(params[:id])
      if applicant.update(update_params)
        render_json_message(:ok, message: "Personal information updated!",
                                 resource: serialized_message(applicant))
      else
        render_json_message(:forbidden, errors: applicant.errors.full_messages)
      end
    end

    def fetch
      responses = Applicant.find(params[:applicant_id]).responses
      render json: responses, each_serializer: ResponseSerializer, root: false
    end

    private

    def update_params
      params.permit(:first_name, :last_name, :year, :gpa, :units, :phone)
    end
  end
end
