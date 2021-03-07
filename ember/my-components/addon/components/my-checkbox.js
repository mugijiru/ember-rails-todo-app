import Component from '@ember/component';

export default Component.extend({
  classNames: ['c-checkbox'],
  classNameBindings: ['checked:c-checkbox--checked'],

  checked: false
});
