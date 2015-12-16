class ApplicantsController < ApplicationController
  def apply
    @applicant = Applicant.find(params[:applicant_id])
  end
end
