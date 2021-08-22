# Create User
user = User.create!(email: 'foo@example.com', password: 'password')

# Create TODO Items
TodoItem.create!(user: user, name: 'TODO Item 1')
TodoItem.create!(user: user, name: 'Completed TODO Item 1', is_completed: true)
TodoItem.create!(user: user, name: 'Body inputted', body: "This is a description.\nAnd this is new line.")
TodoItem.create!(user: user, name: 'TODO Item 2')
