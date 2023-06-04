import { assert, module, test } from 'qunit'
import { setupWorker, rest } from 'msw'
import { TestContext } from '@ember/test-helpers'
import { setupTest } from 'todo-app/tests/helpers'
import TodoItemModel from 'todo-app/models/todo-item'
import TodoItemsRoute from 'todo-app/routes/todo-items'

interface Context extends TestContext {
  worker: ReturnType<typeof setupWorker>
}

module('Unit | Route | todo-items', function (hooks) {
  setupTest(hooks)

  hooks.before(async function (this: Context) {
    this.worker = setupWorker()
    await this.worker.start({ onUnhandledRequest: 'error', quiet: true })
  })

  hooks.afterEach(function (this: Context) {
    this.worker.resetHandlers()
  })

  hooks.after(function (this: Context) {
    this.worker.stop()
  })

  test('the model is stored all todo items', async function (this: Context) {
    const route = this.owner.lookup('route:todo-items') as any // eslint-disable-line @typescript-eslint/no-explicit-any

    this.worker.use(
      rest.get('/api/v1/todo_items', (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.set('Content-Type', 'application/vnd.api+json'),
          ctx.json({
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
          })
        )
      })
    )
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
