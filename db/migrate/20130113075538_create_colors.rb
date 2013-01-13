class CreateColors < ActiveRecord::Migration
  def change
    create_table :colors do |t|
      t.integer :user_id
      t.string :logo
      t.string :headline
      t.string :text
      t.string :header
      t.string :background

      t.timestamps
    end
  end
end
