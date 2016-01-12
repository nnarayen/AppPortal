class AddInterviewReferenceToApplicants < ActiveRecord::Migration
  change_table :applicants do |t|
    t.belongs_to :interview, index: true
  end
end
