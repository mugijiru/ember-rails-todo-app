//= require jquery
//= require jquery_ujs
//= require ./environment
//= require ember
//= require ember-data
//= require ember-rails/application
//= require active-model-adapter
//
//= require ember-components
//= require ./todo-app
//= require_self

import EmberComponents from 'ember-components';
EmberComponents.registerAll(TodoApp);
