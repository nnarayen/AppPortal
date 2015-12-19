class AddSubmitToApplicant < ActiveRecord::Migration
  change_table :applicants do |t|
    t.boolean :submit
  end
end
