import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade'],
  item: null,

  style: Ember.computed('item', function () {
    const display = this.get('item') ? 'block' : 'none';
    return `display: ${display};`;
  }),

  enabled: Ember.observer('item', function () {
    if (this.get('item')) {
      this.open();
    }
  }),

  open () {
    this.$().modal('show');
  },

  close () {
    this.$().modal('hide');
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
