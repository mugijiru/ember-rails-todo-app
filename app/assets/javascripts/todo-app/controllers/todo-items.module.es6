import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  todoItems: Ember.computed.alias('model'),
  savedTodoItems: Ember.computed('todoItems.@each.isNew', function () {
    return this.get('todoItems').filterBy('isNew', false);
  }),
  buildingTodoItem: Ember.computed('todoItems.@each.isNew', function () {
    return this.get('todoItems').filterBy('isNew', true).get('firstObject');
  }),

  actions: {
    build () {
      if (this.get('buildingTodoItem')) { return; }
      this.get('store').createRecord('todo-item');
    }
  }
});
