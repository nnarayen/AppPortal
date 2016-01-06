class ApplicantStatusMailerJob
  include SuckerPunch::Job

  def perform(category)
    Applicant.send(category).each do |applicant|
      ApplicantMailer.status_email(applicant, category).deliver_now
    end
  end
end
