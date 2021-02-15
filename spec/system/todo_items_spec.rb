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

  it 'can create new todo item' do
    create_list(:todo_item, 10, user: @user)

    visit '/todo_items'

    expect(page).to have_content 'TODO item 10'

    click_button 'Create'
    fill_in 'Name', with: 'A new TODO'
    fill_in 'Body', with: 'This is new TODO description'
    click_button 'Save'

    expect(page).to have_content "A new TODO"
    expect(page).not_to have_content 'This is new TODO description'
    find('summary', text: 'A new TODO').click
    expect(page).to have_content 'This is new TODO description'
  end
end
