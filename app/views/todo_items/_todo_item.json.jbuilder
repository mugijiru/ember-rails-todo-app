json.extract! todo_item, :id, :name, :body, :is_completed, :user_id, :created_at, :updated_at
json.url todo_item_url(todo_item, format: :json)
