import { module, test } from 'qunit'
import sinon from 'sinon'

import { setupTest } from 'todo-app/tests/helpers'

module('Unit | Service | current-user', function (hooks) {
  setupTest(hooks)

  test('set email from #todo-app dataset', function (assert) {
    const div = document.createElement('div')
    div.dataset.email = 'foo@example.com'
    sinon.stub(document, 'querySelector').returns(div)
    const service = this.owner.lookup('service:current-user')
    assert.equal(service.email, 'foo@example.com')
  })

  test('email is empty string when #todo-app dataset does not exist.', function (assert) {
    const div = document.createElement('div')
    sinon.stub(document, 'querySelector').returns(div)
    const service = this.owner.lookup('service:current-user')
    assert.equal(service.email, '')
  })

  test('email is empty string when #todo-app does not exist.', function (assert) {
    sinon.stub(document, 'querySelector').returns(null)
    const service = this.owner.lookup('service:current-user')
    assert.equal(service.email, '')
  })
})
