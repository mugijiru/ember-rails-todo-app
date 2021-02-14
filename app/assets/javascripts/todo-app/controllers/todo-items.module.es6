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
  hidignCompleted: false,
  hiddenOrHidingCompleted: Ember.computed('hiddenCompleted', 'hidingCompleted', function () {
    return this.get('hiddenCompleted') || this.get('hidingCompleted');
  }),

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

      if (this.get('hiddenCompleted')) { // to Show
        this.set('hiddenCompleted', false);
      } else { // to Hide
        this.set('hidingCompleted', true);
        const targetItems = $('.p-todo-item__completed');
        const hidingClass = 'p-todo-item--hiding';

        targetItems.addClass(hidingClass);
        Ember.run.later(() => {
          this.set('hiddenCompleted', true);
          this.set('hidingCompleted', false);
          targetItems.removeClass(hidingClass);
        }, 300);
      }
    },

    deleteCompletedItems () {
      const completedItems = this.get('savedTodoItems').filterBy('isCompleted', true);
      completedItems.forEach(item => item.destroyRecord());
    }
  }
});
