class TodoItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :is_completed
end
