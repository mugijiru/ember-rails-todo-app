FactoryBot.define do
  factory :todo_item do
    sequence(:name, 'TODO item 1')
    body { 'TODO description' }
    is_completed { false }
    user { nil }
  end
end
