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
  editingTodoItem: null,

  actions: {
    build () {
      const buildingRecord = this.get('todoItems').filterBy('isNew', true).get('firstObject');

      if (buildingRecord) {
        this.set('editingTodoItem', buildingRecord);
      } else {
        this.set('editingTodoItem', this.get('store').createRecord('todo-item'));
      }
    },

    edit (item) {
      this.set('editingTodoItem', item);
    }
  }
});
