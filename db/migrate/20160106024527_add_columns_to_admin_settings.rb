class AddColumnsToAdminSettings < ActiveRecord::Migration
  change_table :settings do |t|
    t.integer :stage, default: 0
    t.date :deadline
  end
end
