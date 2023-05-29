require 'rails_helper'

RSpec.describe TodoItemsController do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/todo_items').to route_to('todo_items#index')
    end
  end
end
