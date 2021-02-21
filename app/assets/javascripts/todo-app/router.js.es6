TodoApp.Router = Ember.Router.extend({
  // location: 'history'
});

TodoApp.Router.map(function() {
  this.route('todo-items', { path: '/' });
});
