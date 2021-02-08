//= require_tree ./adapters
//= require_tree ./mixins
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require_tree ./routes
//= require ./router
//
//= require_self

import Application from 'ember-rails/application';
import loadInitializers from 'ember/load-initializers';

const TodoApp = Application.extend({
  rootElement: '#todo-app',
  modulePrefix: 'todo-app'
});
loadInitializers(TodoApp, 'todo-app');

// for more details see: http://emberjs.com/guides/application/
export default TodoApp;
