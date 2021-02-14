 require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe '/todo_items', type: :request do
  before do
    @user = User.find_or_initialize_by(email: 'test@example.com')
    if @user.new_record?
      @user.attributes = { password: 'password', password_confirmation: 'password' }
      @user.save!
    end
    sign_in @user
  end

  let(:valid_attributes) { { name: 'TODO Item 1', user: @user } }

  let(:invalid_attributes) { { name: nil, user: @user } }

  describe 'GET /index' do
    it 'renders a successful response' do
      TodoItem.create!(name: 'valid name', user: @user)
      get '/api/v1/todo_items'
      json = JSON.parse(response.body)
      expect(json['todo_items'][0]['name']).to eq 'valid name'
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new TodoItem' do
        expect {
          post '/api/v1/todo_items', params: { todo_item: { name: 'valid name' } }
        }.to change(TodoItem, :count).by(1)
      end

      it 'response statis is 201(created)' do
        post '/api/v1/todo_items', params: { todo_item: { name: 'valid name' } }
        expect(response.status).to eq(201)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new TodoItem' do
        expect {
          post '/api/v1/todo_items', params: { todo_item: { name: nil } }
        }.to change(TodoItem, :count).by(0)
      end

      it "response status is 422(unprocessable entity)" do
        post '/api/v1/todo_items', params: { todo_item: { name: nil } }
        expect(response.status).to eq(422)
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      it 'updates the requested todo_item' do
        todo_item = TodoItem.create!(name: 'existing item', user: @user)
        patch "/api/v1/todo_items/#{todo_item.id}", params: { todo_item: { name: 'edited name' } }
        todo_item.reload
        expect(todo_item.name).to eq('edited name')
      end

      it 'response status is 200(ok)' do
        todo_item = TodoItem.create! valid_attributes
        patch "/api/v1/todo_items/#{todo_item.id}", params: { todo_item: { name: 'edited name'} }
        expect(response.status).to eq(200)
      end
    end

    context 'with invalid parameters' do
      it 'response status is 422(unprocessable entity)' do
        todo_item = TodoItem.create!(name: 'TODO item', user: @user)
        patch "/api/v1/todo_items/#{todo_item.id}", params: { todo_item: { name: nil } }
        expect(response.status).to eq(422)
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested todo_item' do
      todo_item = TodoItem.create!(name: 'TODO item', user: @user)
      expect {
        delete "/api/v1/todo_items/#{todo_item.id}"
      }.to change(TodoItem, :count).by(-1)
    end

    it 'response status is 204(no content)' do
      todo_item = TodoItem.create!(name: 'TODO item', user: @user)
      delete "/api/v1/todo_items/#{todo_item.id}"
      expect(response.status).to eq(204)
    end
  end
end
