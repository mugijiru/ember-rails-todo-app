import { click, findAll, render, TestContext } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import { setupWorker, rest } from 'msw'
import { module, test } from 'qunit'

import TodoItemModel from 'todo-app/models/todo-item'

import { setupRenderingTest } from '../../helpers'

interface Context extends TestContext {
  item: TodoItemModel | null
  setEditingRecord: (item: TodoItemModel) => void
  worker: ReturnType<typeof setupWorker>
}

module('Integrations | Coomponents | todo-item', function (hooks) {
  setupRenderingTest(hooks)

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

    this.item = store.peekRecord('todo-item', 1)
    this.setEditingRecord = () => {} // eslint-disable-line @typescript-eslint/no-empty-function

    await render(
      hbs`<TodoItem @item={{this.item}} @setEditingRecord={{this.setEditingRecord}} />`
    )

    const dom = assert.dom('.p-todo-item')
    dom.hasNoClass('p-todo-item__completed')

    const checkButton = assert.dom('.p-todo-item button:first-of-type')
    checkButton.hasNoClass('mg-checkbox--checked')

    this.worker.use(
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

    this.worker.use(
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
  })

  test('call setEditingRecord() when edit button clicked', async function (this: Context, assert) {
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
    this.setEditingRecord = (item: TodoItemModel) => {
      item.name = 'modified name!'
    }

    await render(
      hbs`<TodoItem @item={{this.item}} @setEditingRecord={{this.setEditingRecord}} />`
    )

    const buttons = findAll('.p-todo-item button')
    const editButton = buttons.find(
      (button) => button.textContent?.trim() === 'Edit'
    )

    if (!editButton) {
      throw new Error('Edit button is not found')
    }

    await click(editButton)

    const dom = assert.dom('.p-todo-item')
    dom.hasTextContaining('modified name!')
  })
})
