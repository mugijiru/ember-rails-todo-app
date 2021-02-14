import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  todoItems: Ember.computed.alias('model'),
  savedTodoItems: Ember.computed('todoItems.@each.isNew', function () {
    return this.get('todoItems').filterBy('isNew', false);
  }),
  listedTodoItems: Ember.computed('savedTodoItems.[]', 'hiddenCompleted', function () {
    const items = this.get('savedTodoItems');
    if (this.get('hiddenCompleted')) {
      return items.filterBy('isCompleted', false);
    } else {
      return items;
    }
  }),
  buildingTodoItem: Ember.computed('todoItems.@each.isNew', function () {
    return this.get('todoItems').filterBy('isNew', true).get('firstObject');
  }),
  editingTodoItem: null,
  hiddenCompleted: false,

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
    },

    toggleHiddenCompletedItems () {
      this.set('hiddenCompleted', !this.get('hiddenCompleted'));
    },

    deleteCompletedItems () {
      const completedItems = this.get('savedTodoItems').filterBy('isCompleted', true);
      completedItems.forEach(item => item.destroyRecord());
    }
  }
});
