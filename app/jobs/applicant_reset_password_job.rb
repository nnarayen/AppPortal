class ApplicantResetPasswordJob
  include SuckerPunch::Job

  def perform(applicant)
    applicant.create_token
    ApplicantMailer.password_email(applicant).deliver_now
  end
end
