require 'rails_helper'

RSpec.describe 'Todo Items', type: :system do
  before do
    @user = create(:user)
    login_as(@user)
  end

  it 'display registered todo items' do
    create_list(:todo_item, 10, user: @user)

    visit '/todo_items'

    expect(page).to have_content 'TODO item 10'
  end
end
