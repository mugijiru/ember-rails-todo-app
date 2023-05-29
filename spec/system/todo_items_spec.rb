require 'rails_helper'

RSpec.describe 'Todo Items', type: :system do
  let(:user) { create(:user, email: 'test-user@example.com') }

  before do
    login_as(user)
  end

  it 'display user email' do
    visit '/todo_items'

    expect(page).to have_content 'test-user@example.com'
  end

  it 'display registered todo items' do
    create_list(:todo_item, 10, user: user)

    visit '/todo_items'

    expect(page).to have_content 'TODO item 10'
  end

  it 'hide comopleted todo items when switched hidden' do
    create_list(:todo_item, 5, user: user, name: "Completed Todo Item", is_completed: true)
    create_list(:todo_item, 5, user: user)

    visit '/todo_items'

    aggregate_failures do
      expect(page).to have_content('Completed Todo Item', count: 5)
      expect(page).to have_css('.p-todo-item', count: 10)

      find('.mg-toggle-switch').click

      expect(page).not_to have_content('Completed Todo Item')
      expect(page).to have_css('.p-todo-item', count: 5)
    end
  end

  it 'can create new todo item' do
    create_list(:todo_item, 10, user: user)

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
    create_list(:todo_item, 10, user: user)

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
    create_list(:todo_item, 10, user: user)

    visit '/todo_items'

    expect(page).to have_content 'TODO item 10'

    line = find('summary', text: 'TODO item 10').find(:xpath, '../..')
    within line do
      click_button 'Delete'
    end

    expect(page).not_to have_content "TODO item 10"
  end
end
