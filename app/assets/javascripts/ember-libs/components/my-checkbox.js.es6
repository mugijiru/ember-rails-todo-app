EmberLibs.CheckboxComponent = Ember.Component.extend({
  classNames: ['c-checkbox'],
  classNameBindings: ['checked:c-checkbox--checked'],

  checked: false
});