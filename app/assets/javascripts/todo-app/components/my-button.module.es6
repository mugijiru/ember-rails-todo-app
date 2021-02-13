import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['isPrimary:btn-primary'],
  isPrimary: false,

  text: ''
});
