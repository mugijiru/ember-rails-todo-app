// import EmberLibs from 'ember-libs/ember-libs';

// export function initialize(application) {
//   application.register('component:my-checkbox', foo);
// }

// export default {
//   name: 'resolve-common-libs',
//   initialize: initialize
// }


import MyCheckbox from 'ember-libs/components/my-checkbox';

export function initialize(application) {
  application.register('component:my-checkbox', MyCheckbox);
}

export default {
  name: 'resolve-common-libs',
  initialize: initialize
};
