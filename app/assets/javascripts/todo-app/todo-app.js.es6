//= require_tree ./moduled/components
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

import MyToggleSwitchComponent from 'todo-app/moduled/components/my-toggle-switch';

window.TodoApp = Ember.Application.create({
  rootElement: '#todo-app',
  modulePrefix: 'todo-app'
});

TodoApp.MyToggleSwitchComponent = MyToggleSwitchComponent;
