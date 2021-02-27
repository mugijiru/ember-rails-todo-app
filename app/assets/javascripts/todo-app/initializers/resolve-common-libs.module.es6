import EmberLibs from 'ember-libs/ember-libs';

export function initialize(application) {
  EmberLibs.registerAll(application);
}

export default {
  name: 'register-common-libs',
  initialize: initialize
};
