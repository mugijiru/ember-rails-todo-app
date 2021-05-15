class Api::V1::TodoItemsController < ApplicationController
  include ActionController::MimeResponds

  def index
    todo_items = TodoItem.where(user_id: current_user.id).all
    render jsonapi: todo_items, each_serializer: TodoItemSerializer
  end

  def create
    todo_item = TodoItem.new(user: current_user)
    todo_item.attributes = todo_item_params
    todo_item.save!
    render jsonapi: todo_item, status: :created, serializer: TodoItemSerializer
  rescue
    render jsonapi: todo_item.errors, status: :unprocessable_entity
  end

  def update
    todo_item = TodoItem.where(user_id: current_user.id).find(params[:id])
    todo_item.update!(todo_item_params)
    render jsonapi: todo_item, serializer: TodoItemSerializer
  rescue
    render jsonapi: todo_item.errors, status: :unprocessable_entity
  end

  def destroy
    todo_item = TodoItem.where(user_id: current_user.id).find(params[:id])
    todo_item.destroy!
    head :no_content
  end

  private

  def todo_item_params
    ActiveModelSerializers::Deserialization.jsonapi_parse!(params, only: %i[name body is_completed])
  end
end
