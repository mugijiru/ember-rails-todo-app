import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class TodoItemFormModal extends Component {
  get item() { return this.args.item ?? null }
  get isOpen() { return Boolean(this.item) }

  get title() {
    if (!this.item) { return '' }
    const mode = this.item.isNew ? 'New' : 'Edit'
    return `${mode} TODO`
  }

  get style () {
    const display = this.item ? 'block' : 'none';
    return `display: ${display};`;
  }

  @action
  cancel() {
    const item = this.item;
    if (item) { item.deleteRecord() }
    this.args.close();
    return false;
  }

  @action
  save() {
    this.item
      .save()
      .then(() => { this.args.close() })
      .catch(() => { alert('System Error!') })
    return false
  }
}
