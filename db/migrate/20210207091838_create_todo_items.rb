class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.belongs_to :user, foreign_key: true, null: false, index: true
      t.string :name, null: false, limit: 255
      t.text :body, limit: 1024
      t.boolean :is_completed, null: false, default: false

      t.timestamps
    end
  end
end
