FactoryBot.define do
  factory :todo_item do
    name { "TODO item" }
    body { "TODO description" }
    is_completed { false }
    user { nil }
  end
end
