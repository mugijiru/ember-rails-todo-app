import Application from '@ember/application'
import Resolver from 'ember-resolver'
import loadInitializers from 'ember-load-initializers'
import config from 'todo-app/config/environment'

export default class App extends Application {
  rootElement = '#todo-app'
  modulePrefix = config.modulePrefix
  podModulePrefix = config.podModulePrefix
  Resolver = Resolver
}

loadInitializers(App, config.modulePrefix)
