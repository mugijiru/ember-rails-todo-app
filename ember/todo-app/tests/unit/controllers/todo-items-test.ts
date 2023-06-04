import { module, test } from 'qunit'
import sinon from 'sinon'
import Store from '@ember-data/store'
import TodoItems from 'todo-app/controllers/todo-items'
import { setupTest } from 'todo-app/tests/helpers'

module('Unit | Controller | todo-items', function (hooks) {
  setupTest(hooks)

  test('get savedTodoItems', async function (assert) {
    const controller = this.owner.lookup('controller:todo-items') as TodoItems
    const newTodoItem = this.owner
      .lookup('service:store')
      .createRecord('todo-item', { name: 'new', isCompleted: false })
    const savedTodoItem = this.owner
      .lookup('service:store')
      .createRecord('todo-item', { name: 'saved', isCompleted: false })
    sinon.stub(savedTodoItem, 'isNew').get(() => false)

    controller.todoItems = [newTodoItem, savedTodoItem]
    const actual = controller.get('savedTodoItems')
    assert.deepEqual(actual, [savedTodoItem])
  })

  test('get buildingTodoItem', async function (assert) {
    const controller = this.owner.lookup('controller:todo-items') as TodoItems
    const newTodoItem = this.owner
      .lookup('service:store')
      .createRecord('todo-item', { name: 'new', isCompleted: false })
    const savedTodoItem = this.owner
      .lookup('service:store')
      .createRecord('todo-item', { name: 'saved', isCompleted: false })
    sinon.stub(savedTodoItem, 'isNew').get(() => false)

    controller.todoItems = [newTodoItem, savedTodoItem]
    const actual = controller.get('buildingTodoItem')
    assert.deepEqual(actual, newTodoItem)
  })

  test('action build should set new todo-item to editingTodoItem', async function (assert) {
    const controller = this.owner.lookup('controller:todo-items') as TodoItems

    controller.build()
    const editingTodoItem = controller.editingTodoItem
    assert.ok(editingTodoItem!.isNew)
  })

  test('action build should set new todo-item from todoItems to editingTodoItem', async function (assert) {
    const controller = this.owner.lookup('controller:todo-items') as TodoItems
    const store = this.owner.lookup('service:store') as Store
    controller.todoItems = [...Array(3)].map((num) =>
      store.createRecord('todo-item', {
        name: `item ${num}`,
        isCompleted: false,
      })
    )

    controller.build()
    const editingTodoItem = controller.editingTodoItem
    assert.deepEqual(editingTodoItem, controller.todoItems[0])
  })
})
