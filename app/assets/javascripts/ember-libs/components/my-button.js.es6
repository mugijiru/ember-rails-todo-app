EmberLibs.MyButtonComponent = Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['isPrimary:btn-primary', 'isDanger:btn-danger'],
  attributeBindings: ['disabled'],

  isPrimary: false,
  isDanger: false,
  disabled: false,

  text: ''
});
