class AddStageToApplicant < ActiveRecord::Migration
  change_table :applicants do |t|
    t.integer :stage, default: 0
  end
end
