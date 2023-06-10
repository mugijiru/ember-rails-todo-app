import { action } from '@ember/object'
import Component from '@glimmer/component'

import TodoItemModel from 'todo-app/models/todo-item'

interface TodoItemFormModalArgs {
  item?: TodoItemModel
  close: () => void
}

export default class TodoItemFormModal extends Component<TodoItemFormModalArgs> {
  get item() {
    return this.args.item ?? null
  }

  get isOpen() {
    return Boolean(this.item)
  }

  get title() {
    if (!this.item) {
      return ''
    }

    const mode = this.item.get('isNew') ? 'New' : 'Edit'
    return `${mode} TODO`
  }

  get style() {
    const display = this.item ? 'block' : 'none'
    return `display: ${display};`
  }

  @action
  cancel() {
    const item = this.item
    if (item) {
      item.deleteRecord()
    }
    this.args.close()
    return false
  }

  @action
  save() {
    if (!this.item) {
      return false
    }

    this.item
      .save()
      .then(() => {
        this.args.close()
      })
      .catch(() => {
        alert('System Error!')
      })
    return false
  }
}
