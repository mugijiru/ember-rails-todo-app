import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['p-todo-item'],

  item: null,

  actions: {
    toggle () {
      const item = this.get('item');
      item.set('isCompleted', !item.get('isCompleted'));
      item.save();
    },

    edit () {
      const item = this.get('item');
      this.get('setEditingRecord')(item);
    },

    delete () {
      const item = this.get('item');
      item.destroyRecord();
    }
  }
});