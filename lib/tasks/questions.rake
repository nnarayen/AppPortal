namespace :questions do
  desc "Generates form based on configuration file"
  task generate: :environment do
    fp = File.expand_path("../../../db/application/application_questions.yml", __FILE__)
    form_config = HashWithIndifferentAccess.new(YAML.load(File.read(fp)))
    form_config[:questions].each { |question| Question.create(question) }
  end
end
