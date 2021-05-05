import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
import { computed, action } from '@ember/object';

export default class TodoItem extends Component {
  @tracked isShowing = false

  constructor() {
    super(...arguments)
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
    item.set('isCompleted', !item.get('isCompleted'))
    item.save()
  }

  @action
  edit() {
    const item = this.item
    this.args.setEditingRecord(item)
  }

  @action
  delete() {
    this.item.destroyRecord()
  }
}
