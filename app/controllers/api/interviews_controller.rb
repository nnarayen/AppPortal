module Api
  class InterviewsController < Api::BaseController
    before_action :authenticate_user!, only: [:index]
    before_action :authenticate_admin!, except: [:index]

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

    def update
      interview = Interview.find(params[:id])
      interview.update!(update_params)
      render_json_message(:ok, message: "Interview timeslot updated!",
                               resource: Interview.all.map(&:serialize))
    rescue
      render_json_message(:forbidden, errors: interview.errors.full_messages)
    end

    def destroy
      Interview.find(params[:id]).destroy!
      render_json_message(:ok, message: "Interview successfully deleted!",
                               resource: Interview.all.map(&:serialize))
    rescue
      render_json_message(:forbidden, errors: ["Error deleting interview."])
    end

    def reset
      Interview.destroy_all
      render_json_message(:ok, message: "Interviews successfully reset!",
                               resource: Interview.all.map(&:serialize))
    rescue
      render_json_message(:forbidden, errors: ["Error resetting interviews."])
    end

    private

    def update_params
      params.permit(:timeslot)
    end
  end
end
