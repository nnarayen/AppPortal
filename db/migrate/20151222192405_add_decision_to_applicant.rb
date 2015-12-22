class AddDecisionToApplicant < ActiveRecord::Migration
  def change
    change_table :applicants do |t|
      t.integer :decisions, array: true, default: []
    end
  end
end
