class Api::V1::TodoItemsController < ApplicationController
  def index
    todo_items = TodoItem.where(user_id: current_user.id).all
    render json: todo_items, each_serializer: TodoItemSerializer
  end

  def create
    todo_item = TodoItem.new(user: current_user)
    todo_item.attributes = todo_item_params
    todo_item.save!
    render json: todo_item, status: :created, serializer: TodoItemSerializer
  rescue
    render json: todo_item.errors, status: :unprocessable_entity
  end

  def update
    todo_item = TodoItem.where(user_id: current_user.id).find(params[:id])
    todo_item.update!(todo_item_params)
    render json: todo_item, serializer: TodoItemSerializer
  rescue
    render json: todo_item.errors, status: :unprocessable_entity
  end

  def destroy
    todo_item = TodoItem.where(user_id: current_user.id).find(params[:id])
    todo_item.destroy!
    head :no_content
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:name, :body, :is_completed)
  end
end
