import Route from '@ember/routing/route';

export default class TodoItem extends Route {
  model() {
    return this.store.findAll('todo-item');
  }
};
