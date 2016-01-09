class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.belongs_to :applicant, index: true
      t.belongs_to :admin, index: true
      t.string :text
      t.timestamps null: false
    end
  end
end
