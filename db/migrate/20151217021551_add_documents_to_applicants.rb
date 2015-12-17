class AddDocumentsToApplicants < ActiveRecord::Migration
  change_table :applicants do |t|
    t.string :resume
    t.string :picture
  end
end
