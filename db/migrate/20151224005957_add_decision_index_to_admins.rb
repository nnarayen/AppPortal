class AddDecisionIndexToAdmins < ActiveRecord::Migration
  def change
    change_table :admins do |t|
      t.integer :decision
    end
  end
end
