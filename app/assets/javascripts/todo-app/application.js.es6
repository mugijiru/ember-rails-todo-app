//= require jquery
//= require jquery_ujs
//= require ./environment
//= require ember
//= require ember-data
//= require ember-rails/application
//
//= require ./todo-app
//= require_self

import TodoApp from 'todo-app';
// import config from 'environment'; // You can use `config` for application specific variables such as API key, etc.

TodoApp.create();
