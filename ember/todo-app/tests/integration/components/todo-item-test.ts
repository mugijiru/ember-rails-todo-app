import { click, render, TestContext } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import { setupWorker, rest } from 'msw'
import { module, test } from 'qunit'

import TodoItemModel from 'todo-app/models/todo-item'

import { setupRenderingTest } from '../../helpers'

interface Context extends TestContext {
  item: TodoItemModel | null
  setEditingRecord: (item: TodoItemModel) => void
}

module('Integrations | Coomponents | todo-item', function (hooks) {
  setupRenderingTest(hooks)

  test('renders item name', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    store.push({
      data: [
        {
          id: '1',
          type: 'todo-item',
          attributes: {
            name: 'new item!',
            isCompleted: false,
          },
        },
      ],
    })

    this.item = store.peekRecord('todo-item', 1)
    this.setEditingRecord = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

    await render(
      hbs`<TodoItem @item={{this.item}} @setEditingRecord={{this.setEditingRecord}} />`
    )

    const dom = assert.dom('.p-todo-item')
    dom.hasTextContaining('new item!')
  })

  module('completion state', function () {
    test('rendered item is not completed when passed incompleted item', async function (this: Context, assert) {
      const store = this.owner.lookup('service:store')
      store.push({
        data: [
          {
            id: '1',
            type: 'todo-item',
            attributes: {
              name: 'new item!',
              isCompleted: false,
            },
          },
        ],
      })

      this.item = store.peekRecord('todo-item', 1)
      this.setEditingRecord = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

      await render(
        hbs`<TodoItem @item={{this.item}} @setEditingRecord={{this.setEditingRecord}} />`
      )

      const dom = assert.dom('.p-todo-item')
      dom.hasNoClass('p-todo-item__completed')

      const checkButton = assert.dom('.p-todo-item button:first-of-type')
      checkButton.hasNoClass('mg-checkbox--checked')
    })

    test('rendered item is completed when passed completed item', async function (this: Context, assert) {
      const store = this.owner.lookup('service:store')
      store.push({
        data: [
          {
            id: '3',
            type: 'todo-item',
            attributes: {
              name: 'new item!',
              isCompleted: true,
            },
          },
        ],
      })

      this.item = store.peekRecord('todo-item', 3)
      this.setEditingRecord = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

      await render(
        hbs`<TodoItem @item={{this.item}} @setEditingRecord={{this.setEditingRecord}} />`
      )

      const dom = assert.dom('.p-todo-item')
      dom.hasClass('p-todo-item__completed')

      const checkButton = assert.dom('.p-todo-item button:first-of-type')
      checkButton.hasClass('mg-checkbox--checked')
    })

    test('toggle completion state', async function (this: Context, assert) {
      const store = this.owner.lookup('service:store')
      store.push({
        data: [
          {
            id: '1',
            type: 'todo-item',
            attributes: {
              name: 'new item!',
              isCompleted: false,
            },
          },
        ],
      })

      const worker = setupWorker()
      await worker.start({ onUnhandledRequest: 'error', quiet: true })

      this.item = store.peekRecord('todo-item', 1)
      this.setEditingRecord = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

      await render(
        hbs`<TodoItem @item={{this.item}} @setEditingRecord={{this.setEditingRecord}} />`
      )

      const dom = assert.dom('.p-todo-item')
      dom.hasNoClass('p-todo-item__completed')

      const checkButton = assert.dom('.p-todo-item button:first-of-type')
      checkButton.hasNoClass('mg-checkbox--checked')

      worker.use(
        rest.patch('/api/v1/todo_items/1', (_req, res, ctx) => {
          return res.once(
            ctx.status(200),
            ctx.set('Content-Type', 'application/vnd.api+json'),
            ctx.json({
              data: [
                {
                  type: 'todo-item',
                  id: 1,
                  attributes: {
                    name: 'new item!',
                    is_completed: true,
                    created_at: '2021-01-01T00:00:00.000Z',
                    updated_at: '2021-01-01T00:00:00.000Z',
                  },
                },
              ],
            })
          )
        })
      )

      await click('.p-todo-item button:first-of-type')

      assert.dom('.p-todo-item').hasClass('p-todo-item__completed')
      assert
        .dom('.p-todo-item button:first-of-type')
        .hasClass('mg-checkbox--checked')

      worker.use(
        rest.patch('/api/v1/todo_items/1', (_req, res, ctx) => {
          return res.once(
            ctx.status(200),
            ctx.set('Content-Type', 'application/vnd.api+json'),
            ctx.json({
              data: [
                {
                  type: 'todo-item',
                  id: 1,
                  attributes: {
                    name: 'new item!',
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

      await click('.p-todo-item button:first-of-type')

      assert.dom('.p-todo-item').hasNoClass('p-todo-item__completed')
      assert
        .dom('.p-todo-item button:first-of-type')
        .hasNoClass('mg-checkbox--checked')

      worker.resetHandlers()
      worker.stop()
    })
  })
})
