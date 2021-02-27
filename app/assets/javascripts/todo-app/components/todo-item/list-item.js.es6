TodoItem.ListItemComponent = Ember.Component.extend({
  tagName: 'li',
  classNames: ['p-todo-item'],
  classNameBindings: ['isCompleted:p-todo-item__completed'],

  item: null,
  isCompleted: Ember.computed('item.isCompleted', function () {
    return this.get('item.isCompleted');
  }),

  didInsertElement () {
    this.$().addClass('p-todo-item--showing-enter');
  },

  didRender () {
    Ember.run.later(() => {
      this.$().removeClass('p-todo-item--showing-enter');
    }, 10);
  },

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
