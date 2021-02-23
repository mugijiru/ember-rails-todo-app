import Ember from 'ember';

const Router = Ember.Router.extend({
  // location: 'history'
});

Router.map(function() {
  this.route('todo-items', { path: '/' });
});

export default Router;
