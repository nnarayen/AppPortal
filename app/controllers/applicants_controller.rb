class ApplicantsController < ApplicationController
  def apply
    @applicant = Applicant.find(params[:applicant_id])
  end

  def show
    @applicant = Applicant.find(params[:id])
  end
end
