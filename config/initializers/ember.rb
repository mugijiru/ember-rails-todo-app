EmberCli.configure do |c|
  c.app :todo_app, name: 'todo-app', path: Rails.root.join('ember', 'todo-app'), yarn: true
end
