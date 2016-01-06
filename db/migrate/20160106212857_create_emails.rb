class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.integer :stage
      t.text :accepted, default: ""
      t.text :rejected, default: ""
      t.timestamps null: false
    end
  end
end
