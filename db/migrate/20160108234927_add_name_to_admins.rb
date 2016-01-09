class AddNameToAdmins < ActiveRecord::Migration
  change_table :admins do |t|
    t.string :name
  end
end
