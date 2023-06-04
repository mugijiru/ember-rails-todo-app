import Route from '@ember/routing/route'
import { service } from '@ember/service'
import Store from '@ember-data/store'

export default class TodoItem extends Route {
  @service
  declare store: Store

  model() {
    return this.store.findAll('todo-item')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setupController(controller: any, model: any) {
    controller.set('todoItems', model)
  }
}
