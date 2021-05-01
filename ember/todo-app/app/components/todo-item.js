import { later } from '@ember/runloop';
import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['p-todo-item'],
  classNameBindings: ['isCompleted:p-todo-item__completed'],

  item: null,
  isCompleted: computed('item.isCompleted', function () {
    return this.get('item.isCompleted');
  }),

  didInsertElement () {
    this.element.classList.add('p-todo-item--showing-enter');
  },

  didRender () {
    later(() => {
      this.element.classList.remove('p-todo-item--showing-enter');
    }, 10);
  },

  actions: {
    toggle () {
      const item = this.item;
      item.set('isCompleted', !item.get('isCompleted'));
      item.save();
    },

    edit () {
      const item = this.item;
      this.setEditingRecord(item);
    },

    delete () {
      const item = this.item;
      item.destroyRecord();
    }
  }
});
