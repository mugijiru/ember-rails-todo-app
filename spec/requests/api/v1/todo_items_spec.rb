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
    @user = create(:user)
    sign_in @user
  end

  let(:request_headers) { { 'CONTENT_TYPE' => 'application/vnd.api+json' } }

  describe 'GET /index' do
    it 'renders a successful response' do
      create(:todo_item, name: 'valid name', user: @user)
      get '/api/v1/todo_items'
      json = JSON.parse(response.body)
      expect(json['data'][0]['attributes']['name']).to eq 'valid name'
      assert_response_schema_confirm
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new TodoItem' do
        expect {
          post '/api/v1/todo_items', headers: request_headers, params: generate_params
        }.to change(TodoItem, :count).by(1)
        assert_request_schema_confirm
        assert_response_schema_confirm
      end

      it 'response status is 201(created)' do
        post '/api/v1/todo_items', headers: request_headers, params: generate_params
        expect(response.status).to eq(201)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new TodoItem' do
        expect {
          post '/api/v1/todo_items',
               headers: request_headers,
               params: generate_params(name: nil)
        }.to change(TodoItem, :count).by(0)
      end

      it 'response status is 422(unprocessable entity)' do
        post '/api/v1/todo_items',
             headers: request_headers,
             params: generate_params(name: nil)

        expect(response.status).to eq(422)
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      it 'updates the requested todo_item' do
        todo_item = create(:todo_item, name: 'existing item', user: @user)
        patch "/api/v1/todo_items/#{todo_item.id}",
              headers: request_headers,
              params: generate_params(name: 'edited name')
        todo_item.reload
        expect(todo_item.name).to eq('edited name')

        assert_request_schema_confirm
        assert_response_schema_confirm
      end

      it 'response status is 200(ok)' do
        todo_item = create(:todo_item, name: 'existing item', user: @user)
        patch "/api/v1/todo_items/#{todo_item.id}",
              headers: request_headers,
              params: generate_params(name: 'edited name')
        expect(response.status).to eq(200)
      end
    end

    context 'with invalid parameters' do
      it 'response status is 422(unprocessable entity)' do
        todo_item = create(:todo_item, name: 'TODO item', user: @user)
        patch "/api/v1/todo_items/#{todo_item.id}",
              headers: request_headers,
              params: generate_params(name: nil)
        expect(response.status).to eq(422)
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested todo_item' do
      todo_item = create(:todo_item, name: 'TODO item', user: @user)
      expect {
        delete "/api/v1/todo_items/#{todo_item.id}"
      }.to change(TodoItem, :count).by(-1)
    end

    it 'response status is 204(no content)' do
      todo_item = create(:todo_item, name: 'TODO item', user: @user)
      delete "/api/v1/todo_items/#{todo_item.id}"
      expect(response.status).to eq(204)
    end
  end

  def generate_params(override_attributes = nil)
    attributes = valid_attributes
    attributes.merge!(override_attributes) if override_attributes

    {
      data: {
        type: 'todo-items',
        attributes: attributes
      }
    }.to_json
  end

  def valid_attributes
    {
      name: 'valid name',
      body: 'Valid body',
      is_completed: false
    }
  end
end
