class AddDefaultValueToResponse < ActiveRecord::Migration
  def self.up
    change_table :responses do |t|
      t.change :answer, :string, default: ""
    end
  end

  def self.down
    change_table :responses do |t|
      t.change :answer, :string
    end
  end
end
