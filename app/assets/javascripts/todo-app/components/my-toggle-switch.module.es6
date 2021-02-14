import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['c-toggle-switch'],
  classNameBindings: ['enabled:c-toggle-switch--enabled'],

  enabled: false
});