import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks)

  test('should namespace equal "api/v1"', function (assert) {
    const adapter = this.owner.lookup('adapter:application')
    assert.strictEqual(adapter.namespace, 'api/v1')
  })

  test('pathForType でケバブケースはスネークケースにされた上に複数形にされる', function (assert) {
    const adapter = this.owner.lookup('adapter:application')
    assert.strictEqual(adapter.pathForType('kebab-case'), 'kebab_cases')
  })
})
