import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { later } from '@ember/runloop'
import { action } from '@ember/object'
import TodoItemModel from 'todo-app/models/todo-item'

export interface TodoItemArgs {
  item?: TodoItemModel
  setEditingRecord: (item: TodoItemModel) => void
}

export default class TodoItem extends Component<TodoItemArgs> {
  @tracked isShowing = false

  constructor(owner: unknown, args: TodoItemArgs) {
    super(owner, args)
    this.isShowing = true
    later(() => {
      this.isShowing = false
    }, 10)
  }

  get item() {
    return this.args.item ?? null
  }

  get isCompleted() {
    if (!this.item) {
      return false
    }
    return this.item.isCompleted
  }

  get classNamesString() {
    const classList = ['p-todo-item']
    if (this.isCompleted) {
      classList.push('p-todo-item__completed')
    }
    if (this.isShowing) {
      classList.push('p-todo-item--showing-enter')
    }
    return classList.join(' ')
  }

  @action
  toggle() {
    const item = this.item
    if (!item) {
      return
    }

    item.isCompleted = !item.isCompleted
    item.save()
  }

  @action
  edit() {
    const item = this.item
    if (!item) {
      return
    }

    this.args.setEditingRecord(item)
  }

  @action
  delete() {
    const item = this.item
    if (!item) {
      return
    }

    item.destroyRecord()
  }
}
