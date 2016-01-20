class AddTokenToApplicant < ActiveRecord::Migration
  change_table :applicants do |t|
    t.string :token
  end
end
