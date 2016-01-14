class ConvertDeadlineToDateTime < ActiveRecord::Migration
  def self.up
    change_table :settings do |t|
      t.change :deadline, :datetime
    end
  end

  def self.down
    change_table :settings do |t|
      t.change :deadline, :date
    end
  end
end
