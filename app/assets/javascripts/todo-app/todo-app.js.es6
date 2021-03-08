//= require_self
//= require ./router
//= require_tree ./adapters
//= require_tree ./mixins
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require_tree ./routes
//

window.TodoApp = Ember.Application.create({
  rootElement: '#todo-app',
  modulePrefix: 'todo-app'
});