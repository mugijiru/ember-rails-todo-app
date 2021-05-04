import { later } from '@ember/runloop';
import { computed, action } from '@ember/object';
import { alias, filterBy, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking'

export default class TodoItems extends Controller {
  @tracked editingTodoItem = null
  @tracked hiddenCompleted = false
  @tracked hidingCompleted = false
  @service store
  @filterBy('todoItems', 'isNew', false) savedTodoItems
  @filterBy('savedTodoItems', 'isCompleted', false) incompleteItems
  @or('hiddenCompleted', 'hidingCompleted') hiddenOrHidingCompleted

  get listedTodoItems() {
    return this.hiddenCompleted ? this.incompleteItems : this.savedTodoItems
  }

  get buildingTodoItem () {
    return this.todoItems.filterBy('isNew', true).firstObject
  }

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
  }

  @action
  edit(item) { this.editingTodoItem = item }

  @action
  closeEditingModal() { this.editingTodoItem = null }

  @action
  toggleHiddenCompletedItems() {
    if (this.hiddenCompleted) {
      // to Show
      this.hiddenCompleted = false
    } else {
      // to Hide
      this.hidingCompleted = true
      const targetItems = document.querySelectorAll('.p-todo-item__completed');
      const hidingClass = 'p-todo-item--hiding';

      targetItems.forEach((item) => item.classList.add(hidingClass));
      later(() => {
        this.hiddenCompleted = true
        this.hidingCompleted = false
        targetItems.forEach((item) => item.classList.remove(hidingClass));
      }, 300);
    }
  }

  @action
  deleteCompletedItems() {
    const completedItems = this.savedTodoItems.filterBy('isCompleted', true);
    completedItems.forEach((item) => item.destroyRecord());
  }
}
