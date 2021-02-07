FactoryBot.define do
  factory :todo_item do
    name { "MyString" }
    body { "MyText" }
    is_completed { false }
    user { nil }
  end
end
