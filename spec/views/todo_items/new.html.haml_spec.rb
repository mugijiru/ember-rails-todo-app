require 'rails_helper'

RSpec.describe "todo_items/new", type: :view do
  before(:each) do
    assign(:todo_item, TodoItem.new(
      name: "MyString",
      body: "MyText",
      is_completed: false,
      user: nil
    ))
  end

  it "renders new todo_item form" do
    render

    assert_select "form[action=?][method=?]", todo_items_path, "post" do

      assert_select "input[name=?]", "todo_item[name]"

      assert_select "textarea[name=?]", "todo_item[body]"

      assert_select "input[name=?]", "todo_item[is_completed]"

      assert_select "input[name=?]", "todo_item[user_id]"
    end
  end
end
