class AddSubToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :sub, :string
    add_index :users, :sub, unique: true
  end
end
