import EmberComponents from 'ember-components';

export function initialize(application) {
  EmberComponents.registerAll(application);
}

export default {
  name: 'register-ember-components',
  initialize: initialize
};
