import { computed, observer } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  item: null,
  isOpen: false,

  title: computed('item', function () {
    const mode = this.get('item.isNew') ? 'New' : 'Edit';
    return `${mode} TODO`;
  }),

  style: computed('item', function () {
    const display = this.get('item') ? 'block' : 'none';
    return `display: ${display};`;
  }),

  enabled: observer('item', function () {
    if (this.get('item')) {
      this.open();
    }
  }),

  open () {
    this.set('isOpen', true);
  },

  close () {
    this.set('isOpen', false);
  },

  actions: {
    cancel () {
      const item = this.get('item');
      if (item) { item.deleteRecord(); }
      this.close();
      return false;
    },

    save () {
      this.get('item').save().then((response) => {
        this.close();
      }).catch(function (error) {
      });
      return false;
    }
  }
});
