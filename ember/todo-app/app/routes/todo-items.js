import Route from '@ember/routing/route'
import { service } from '@ember/service'

export default class TodoItem extends Route {
  @service store

  model() {
    return this.store.findAll('todo-item')
  }

  setupController(controller, model) {
    controller.set('todoItems', model)
  }
}
