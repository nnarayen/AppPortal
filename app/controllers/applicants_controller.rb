class ApplicantsController < ApplicationController
  helper_method :applicant_id
  before_action :validate_interview, only: [:interview]
  before_action :validate_status, only: [:status]

  def interview
    @stage = Settings.format_stage
    @interview = Applicant.find(applicant_id).interview
  end

  def applicant_id
    params[:applicant_id] || params[:id]
  end

  private

  def validate_interview
    redirect_to redirect_user_path(current_user) unless current_user.current?
  end

  def validate_status
    redirect_to redirect_user_path(current_user) if current_user.current?
  end
end
