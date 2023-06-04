import { module, test } from 'qunit'

import { setupTest } from 'todo-app/tests/helpers'
import Model, { attr, hasMany } from '@ember-data/model'

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  test('it serializes record attirbute names', function (assert) {
    const store = this.owner.lookup('service:store')
    const record = store.createRecord('todo-item', {
      name: 'new',
      isCompleted: false,
    })
    const serializedRecord: any = record.serialize()
    const attributeNames = Object.keys(serializedRecord.data.attributes)
    assert.ok(attributeNames.includes('is_completed'))
  })

  test('it serializes record relationships', function (assert) {
    // setup dummy models
    const Organization = Model.extend({
      name: attr('string'),
      todoItems: hasMany('todo-items', { async: false, inverse: null }),
    })
    this.owner.register('model:organization', Organization)

    const store = this.owner.lookup('service:store')
    const record = store.createRecord('organization', {
      name: 'a org',
      todoItems: [],
    })
    const serializedRecord: any = record.serialize()
    const relationships = serializedRecord.data.relationships
    assert.ok(relationships['todo_items'])
  })
})
