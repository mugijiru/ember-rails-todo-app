import { module, test } from 'qunit'
import { setupTest } from 'todo-app/tests/helpers'

module('Unit | Service | current-user', function (hooks) {
  setupTest(hooks)

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:current-user')
    assert.ok(service)
  })
})
