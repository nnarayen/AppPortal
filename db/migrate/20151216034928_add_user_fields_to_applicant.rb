class AddUserFieldsToApplicant < ActiveRecord::Migration
  change_table :applicants do |t|
    t.string :first_name
    t.string :last_name
    t.string :year
    t.string :major
    t.integer :gpa
    t.integer :units
    t.string :phone
  end
end
