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
    const display = this.item ? 'block' : 'none';
    return `display: ${display};`;
  }),

  enabled: observer('item', function () {
    if (this.item) {
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
      const item = this.item;
      if (item) { item.deleteRecord(); }
      this.close();
      return false;
    },

    save () {
      this.item.save().then(() => {
        this.close();
      }).catch(function () {
        alert('System Error!')
      });
      return false;
    }
  }
});
