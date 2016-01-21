namespace :decisions do
  desc "Make random decisions for testing purposes"
  task randomize: :environment do
    DECISIONS = { rejected: [0, 0, 0, 0, 0], accepted: [2, 2, 2, 2, 2] }
    Applicant.all.submitted.current.each do |applicant|
      applicant.update!(decisions: DECISIONS.values.sample)
    end
  end
end
