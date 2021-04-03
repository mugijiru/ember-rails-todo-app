import { later } from '@ember/runloop';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  store: service(),
  todoItems: alias('model'),
  savedTodoItems: computed('todoItems.@each.isNew', function () {
    return this.get('todoItems').filterBy('isNew', false);
  }),
  listedTodoItems: computed('savedTodoItems.[]', 'hiddenCompleted', function () {
    const items = this.get('savedTodoItems');
    if (this.get('hiddenCompleted')) {
      return items.filterBy('isCompleted', false);
    } else {
      return items;
    }
  }),
  buildingTodoItem: computed('todoItems.@each.isNew', function () {
    return this.get('todoItems').filterBy('isNew', true).get('firstObject');
  }),
  editingTodoItem: null,
  hiddenCompleted: false,
  hidignCompleted: false,
  hiddenOrHidingCompleted: computed('hiddenCompleted', 'hidingCompleted', function () {
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
        later(() => {
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
