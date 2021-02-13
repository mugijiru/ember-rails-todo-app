import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['isPrimary:btn-primary', 'isDanger:btn-danger'],
  isPrimary: false,
  isDanger: false,

  text: ''
});
