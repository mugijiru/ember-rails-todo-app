import MyCheckbox from 'ember-libs/components/my-checkbox';

export function initialize(application) {
  application.register('component:my-checkbox', MyCheckbox);
}

export default {
  name: 'register',
  initialize: initialize
};
