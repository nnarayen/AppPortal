module Api
  class ApplicantsController < Api::BaseController
    def show
      applicant = Applicant.find(params[:id])
      render json: applicant, serializer: ApplicantSerializer, root: false
    end
  end
end
