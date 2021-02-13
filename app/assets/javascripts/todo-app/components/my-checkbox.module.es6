import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['c-checkbox'],
  classNameBindings: ['checked:c-checkbox--checked'],

  checked: false
});
