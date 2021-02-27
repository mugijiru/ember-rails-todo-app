EmberLibs.ToggleSwitchComponent = Ember.Component.extend({
  classNames: ['c-toggle-switch'],
  classNameBindings: ['enabled:c-toggle-switch--enabled'],

  label: '',
  offLabel: 'Off',
  onLabel: 'On',
  enabled: false
});
