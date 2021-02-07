class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.text :body
      t.boolean :is_completed

      t.timestamps
    end
  end
end
