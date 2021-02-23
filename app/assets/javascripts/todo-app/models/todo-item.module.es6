import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  isCompleted: DS.attr()
});
