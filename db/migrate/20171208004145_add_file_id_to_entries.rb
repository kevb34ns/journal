class AddFileIdToEntries < ActiveRecord::Migration[5.1]
  def change
    add_column :entries, :file_id, :string
    add_index :entries, [:user_id, :file_id], unique: true
  end
end
