import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const TodoApp = Application.extend({
  rootElement: '#ember-cli-todo-app',
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  rootUrl: config.rootUrl,
  Resolver
});

loadInitializers(TodoApp, config.modulePrefix);

export default TodoApp;
