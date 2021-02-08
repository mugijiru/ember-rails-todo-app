class Api::V1::TodoItemsController < ApplicationController
  def index
    todo_items = TodoItem.where(user_id: current_user.id).all
    render json: todo_items, each_serializer: TodoItemSerializer
  end
end
