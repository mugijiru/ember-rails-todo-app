TodoApp.TodoItemsRoute = Ember.Route.extend({
  model() {
    return this.store.findAll('todo-item');
  }
});
