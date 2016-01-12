class CreateInterviews < ActiveRecord::Migration
  def change
    create_table :interviews do |t|
      t.datetime :timeslot
      t.timestamps null: false
    end
  end
end
