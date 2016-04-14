namespace :questions do
  desc "Generates form based on configuration file"
  task generate: :environment do
    Question.destroy_all # Destroy all old questions, generate new

    fp = File.expand_path("../../../db/application/application_questions.yml", __FILE__)
    form_config = HashWithIndifferentAccess.new(YAML.load(File.read(fp)))
    form_config[:questions].each { |question| Question.create(question) }
  end
end
