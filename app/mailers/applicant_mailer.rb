class ApplicantMailer < ActionMailer::Base
  def status_email(applicant, category)
    @applicant = applicant
    @email_text = Email.current.send(category)
    mail to: applicant.email,
         from: ENV['TBG_EMAIL'],
         subject: "The Berkeley Group Application Status"
  end

  def password_email(applicant)
    @applicant = applicant
    mail to: applicant.email,
         from: ENV['TBG_EMAIL'],
         subject: "The Berkeley Group Reset Password Instructions"
  end
end
