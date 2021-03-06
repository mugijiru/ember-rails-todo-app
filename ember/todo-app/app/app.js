import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const TodoApp = Application.extend({
  rootElement: '#todo-app',
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  locationType: config.locationType,
  rootUrl: config.rootUrl,
  Resolver
});

loadInitializers(TodoApp, config.modulePrefix);

export default TodoApp;
