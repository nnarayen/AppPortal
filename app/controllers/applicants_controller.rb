class ApplicantsController < ApplicationController
  before_action :authorize
  before_action :validate_interview, only: [:interview]
  before_action :validate_status, only: [:status]

  helper_method :applicant_id

  def apply
    @applicant = Applicant.find(applicant_id)
    @past_deadline = DateTime.current > Settings.instance.deadline
  end

  def interview
    @stage = Settings.instance.format_stage
    @interview = Applicant.find(applicant_id).interview
  end

  def applicant_id
    params[:applicant_id] || params[:id]
  end

  private

  def authorize
    authorize!(params[:action].to_sym, Applicant.find(applicant_id))
  end

  def validate_interview
    redirect_to redirect_user_path(current_user) unless current_user.current?
  end

  def validate_status
    redirect_to redirect_user_path(current_user) if current_user.current?
  end
end
