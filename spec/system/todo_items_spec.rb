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

  it 'can edit existing todo item' do
    create_list(:todo_item, 10, user: @user)

    visit '/todo_items'

    expect(page).to have_content 'TODO item 10'

    line = find('summary', text: 'TODO item 10').find(:xpath, '../..')
    within line do
      click_button 'Edit'
    end
    fill_in 'Name', with: 'Edited name'
    fill_in 'Body', with: 'Edited Description'
    click_on 'Save'

    expect(page).not_to have_content "TODO item 10"
    expect(page).to have_content "Edited name"
    expect(page).not_to have_content 'Edited Description'
    find('summary', text: 'Edited name').click
    expect(page).to have_content 'Edited Description'
  end

  it 'can delete existing todo item' do
    create_list(:todo_item, 10, user: @user)

    visit '/todo_items'

    expect(page).to have_content 'TODO item 10'

    line = find('summary', text: 'TODO item 10').find(:xpath, '../..')
    within line do
      click_button 'Delete'
    end

    expect(page).not_to have_content "TODO item 10"
  end
end
