class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :qtype
      t.integer :category
      t.integer :limit

      t.timestamps null: false
    end
  end
end
