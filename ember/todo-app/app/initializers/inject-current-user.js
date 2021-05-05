import EmberObject from '@ember/object'
export function initialize(application) {
  // native class でうまく動かす方法が見つかってない
  // eslint-disable-next-line ember/no-classic-classes
  const currentUser = EmberObject.extend({
    email: document.querySelector(application.rootElement).dataset.email,
  })
  application.register('session:current-user', currentUser)
  application.inject(
    'controller:todo-items',
    'current-user',
    'session:current-user'
  )
}

export default {
  name: 'inject-current-user',
  initialize: initialize,
}
