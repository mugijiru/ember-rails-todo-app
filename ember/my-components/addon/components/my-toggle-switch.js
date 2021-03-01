import Component from '@ember/component';
import layout from '../templates/components/my-toggle-switch';

export default Component.extend({
  layout,
  classNames: ['c-toggle-switch'],
  classNameBindings: ['enabled:c-toggle-switch--enabled'],

  label: '',
  offLabel: 'Off',
  onLabel: 'On',
  enabled: false
});
