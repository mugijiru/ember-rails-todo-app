import Route from '@ember/routing/route'
import { service } from '@ember/service'
import DS from 'ember-data'

export default class TodoItem extends Route {
  @service
  declare store: DS.Store

  model() {
    return this.store.findAll('todo-item')
  }

  setupController(controller: any, model: any) {
    controller.set('todoItems', model)
  }
}
