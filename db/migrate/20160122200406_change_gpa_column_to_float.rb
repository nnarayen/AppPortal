class ChangeGpaColumnToFloat < ActiveRecord::Migration
  def up
    change_table :applicants do |t|
      t.change :gpa, :float
    end
  end

  def down
    change_table :applicants do |t|
      t.change :gpa, :integer
    end
  end
end
