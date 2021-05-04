import { later } from '@ember/runloop';
import { computed, action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  store: service(),
  todoItems: alias('model'),
  savedTodoItems: computed.filterBy('todoItems', 'isNew', false),
  listedTodoItems: computed(
    'savedTodoItems.[]',
    'hiddenCompleted',
    function () {
      const items = this.savedTodoItems;
      if (this.hiddenCompleted) {
        return items.filterBy('isCompleted', false);
      } else {
        return items;
      }
    }
  ),
  buildingTodoItem: computed('todoItems.@each.isNew', function () {
    return this.todoItems.filterBy('isNew', true).get('firstObject');
  }),
  editingTodoItem: null,
  hiddenCompleted: false,
  hidignCompleted: false,
  hiddenOrHidingCompleted: computed.or('hiddenCompleted', 'hidingCompleted'),

  @action
  build() {
    const buildingRecord = this.todoItems
      .filterBy('isNew', true)
      .get('firstObject');

    if (buildingRecord) {
      this.set('editingTodoItem', buildingRecord);
    } else {
      this.set('editingTodoItem', this.store.createRecord('todo-item'));
    }
  },

  @action
  edit(item) {
    this.set('editingTodoItem', item);
  },

  @action
  closeEditingModal() {
    this.set('editingTodoItem', null);
  },

  @action
  toggleHiddenCompletedItems() {
    if (this.hiddenCompleted) {
      // to Show
      this.set('hiddenCompleted', false);
    } else {
      // to Hide
      this.set('hidingCompleted', true);
      const targetItems = document.querySelectorAll('.p-todo-item__completed');
      const hidingClass = 'p-todo-item--hiding';

      targetItems.forEach((item) => item.classList.add(hidingClass));
      later(() => {
        this.set('hiddenCompleted', true);
        this.set('hidingCompleted', false);
        targetItems.forEach((item) => item.classList.remove(hidingClass));
      }, 300);
    }
  },

  @action
  deleteCompletedItems() {
    const completedItems = this.savedTodoItems.filterBy('isCompleted', true);
    completedItems.forEach((item) => item.destroyRecord());
  },
});
