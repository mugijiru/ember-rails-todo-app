import MyCheckbox from './components/my-checkbox';

const EmberLibs = {
  registerAll(application) {
    application.register('component:ember-libs/my-checkbox', MyCheckbox);
  }
};

export default EmberLibs;
