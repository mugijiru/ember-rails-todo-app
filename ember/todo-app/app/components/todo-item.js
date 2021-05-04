import { later } from '@ember/runloop';
import { computed, action } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['p-todo-item'],
  classNameBindings: ['isCompleted:p-todo-item__completed'],

  item: null,
  isCompleted: computed.reads('item.isCompleted'),

  didInsertElement() {
    this._super(...arguments);
    this.element.classList.add('p-todo-item--showing-enter');
  },

  didRender() {
    this._super(...arguments);
    later(() => {
      this.element.classList.remove('p-todo-item--showing-enter');
    }, 10);
  },

  @action
  toggle() {
    const item = this.item;
    item.set('isCompleted', !item.get('isCompleted'));
    item.save();
  },

  @action
  edit() {
    const item = this.item;
    this.setEditingRecord(item);
  },

  @action
  delete() {
    const item = this.item;
    item.destroyRecord();
  },
});
