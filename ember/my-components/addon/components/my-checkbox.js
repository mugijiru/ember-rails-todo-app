import Component from '@ember/component';

export default Ember.Component.extend({
  classNames: ['c-checkbox'],
  classNameBindings: ['checked:c-checkbox--checked'],

  checked: false
});
