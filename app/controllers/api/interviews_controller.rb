module Api
  class InterviewsController < Api::BaseController
    before_action :authenticate_user!, only: [:index]
    before_action :authenticate_admin!, only: [:create, :reset]

    def index
      interviews = (current_applicant) ? Interview.available : Interview.all
      render json: interviews, each_serializer: InterviewSerializer
    end

    def create
      Interview.create!(timeslot: params[:timeslot])
      render_json_message(:ok, message: "Interview timeslot created!",
                               resource: Interview.all.map(&:serialize))
    rescue
      render_json_message(:forbidden, errors: ["Please create a valid timeslot."])
    end

    def reset
      Interview.destroy_all
      render_json_message(:ok, message: "Interviews successfully reset!",
                               resource: Interview.all.map(&:serialize))
    rescue
      render_json_message(:forbidden, errors: ["Error resetting interviews."])
    end
  end
end
