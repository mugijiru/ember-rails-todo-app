import { assert, module, test } from 'qunit'
import { TestContext } from '@ember/test-helpers'
import { setupTest } from 'todo-app/tests/helpers'
import TodoItemModel from 'todo-app/models/todo-item'
import TodoItemsRoute from 'todo-app/routes/todo-items'
import { Server } from 'miragejs'
import { setupMirage } from 'ember-cli-mirage/test-support'

interface MirageTestContext extends TestContext {
  server: Server
}

module('Unit | Route | todo-items', function (hooks) {
  setupTest(hooks)
  setupMirage(hooks)

  test('the model is stored all todo items', async function (this: MirageTestContext) {
    const route = this.owner.lookup('route:todo-items') as any // eslint-disable-line @typescript-eslint/no-explicit-any

    this.server.get('/todo_items', () => {
      return {
        data: [
          {
            type: 'todo-item',
            id: 1,
            attributes: {
              name: 'item 1',
              is_completed: false,
              created_at: '2021-01-01T00:00:00.000Z',
              updated_at: '2021-01-01T00:00:00.000Z',
            },
          },
          {
            type: 'todo-item',
            id: 2,
            attributes: {
              name: 'item 2',
              is_completed: false,
              created_at: '2021-01-01T00:00:00.000Z',
              updated_at: '2021-01-01T00:00:00.000Z',
            },
          },
        ],
      }
    })

    const todoItems = (await route.model()) as TodoItemModel[]
    assert.deepEqual(
      todoItems.map((i) => i.name),
      ['item 1', 'item 2']
    )
  })

  test('setupController should set todoItems to controller', function () {
    const route = this.owner.lookup('route:todo-items') as TodoItemsRoute
    const controller = this.owner.lookup('controller:todo-items') as any // eslint-disable-line @typescript-eslint/no-explicit-any
    const store = this.owner.lookup('service:store')
    const todoItems: TodoItemModel[] = []
    todoItems.push(
      store.createRecord('todo-item', {
        name: 'item1',
        isCompleted: false,
      })
    )
    todoItems.push(
      store.createRecord('todo-item', {
        name: 'item2',
        isCompleted: true,
      })
    )

    route.setupController(controller, todoItems)
    assert.deepEqual(controller.todoItems, todoItems)
  })
})
