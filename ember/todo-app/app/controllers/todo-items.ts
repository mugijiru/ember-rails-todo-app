import { A } from '@ember/array'
import Controller from '@ember/controller'
import { action } from '@ember/object'
import { later } from '@ember/runloop'
import { service } from '@ember/service'
import Store from '@ember-data/store'
import { tracked } from '@glimmer/tracking'

import TodoItemModel from 'todo-app/models/todo-item'
import CurrentUserService from 'todo-app/services/current-user'

export default class TodoItems extends Controller {
  @tracked editingTodoItem: TodoItemModel | null = null
  @tracked hiddenCompleted = false
  @tracked hidingCompleted = false
  @service declare store: Store
  @service declare currentUser: CurrentUserService

  todoItems = A<TodoItemModel>([])

  get savedTodoItems(): TodoItemModel[] {
    return this.todoItems.filter((item) => !item.isNew)
  }

  get incompleteItems() {
    return this.savedTodoItems.filterBy('isCompleted', false)
  }

  get hiddenOrHidingCompleted() {
    return this.hiddenCompleted || this.hidingCompleted
  }

  get listedTodoItems() {
    return this.hiddenCompleted ? this.incompleteItems : this.savedTodoItems
  }

  get buildingTodoItem() {
    return this.todoItems.filter((item) => item.isNew).firstObject
  }

  @action
  build() {
    const buildingRecord = this.todoItems
      .filter((item) => item.isNew)
      .get('firstObject')

    this.editingTodoItem =
      buildingRecord ?? this.store.createRecord('todo-item')
  }

  @action
  edit(item: TodoItemModel) {
    this.editingTodoItem = item
  }

  @action
  closeEditingModal() {
    this.editingTodoItem = null
  }

  @action
  toggleHiddenCompletedItems() {
    if (this.hiddenCompleted) {
      // to Show
      this.hiddenCompleted = false
    } else {
      // to Hide
      this.hidingCompleted = true
      const targetItems = document.querySelectorAll('.p-todo-item__completed')
      const hidingClass = 'p-todo-item--hiding'

      targetItems.forEach((item) => item.classList.add(hidingClass))
      later(() => {
        this.hiddenCompleted = true
        this.hidingCompleted = false
        targetItems.forEach((item) => item.classList.remove(hidingClass))
      }, 300)
    }
  }

  @action
  deleteCompletedItems() {
    const completedItems = this.savedTodoItems.filterBy('isCompleted', true)
    completedItems.forEach((item) => item.destroyRecord())
  }
}
