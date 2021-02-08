// For more information see: http://emberjs.com/guides/routing/

import Ember from 'ember';

var Router = Ember.Router.extend({
  // location: 'history'
});

Router.map(function() {
  // this.resource('posts');
  this.route('todo-items', { path: '/' });
});

export default Router;
