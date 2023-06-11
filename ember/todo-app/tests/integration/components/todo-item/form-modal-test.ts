import { click, findAll, render, TestContext } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import { rest, setupWorker } from 'msw'
import { module, test } from 'qunit'

import TodoItemModel from 'todo-app/models/todo-item'
import { setupRenderingTest } from 'todo-app/tests/helpers'

interface Context extends TestContext {
  item?: TodoItemModel
  close: () => void
  worker: ReturnType<typeof setupWorker>
}

module('Integration | Component | todo-item/form-modal', function (hooks) {
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

  test('does not show modal when item is undefined', async function (this: Context, assert) {
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(
      hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`)
    )

    assert.dom('.modal').isNotVisible()
  })

  test('show modal when item is exists', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    const item = store.createRecord('todo-item', {
      name: 'new item!',
      body: 'new item body!',
    })
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(
      hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`)
    )

    assert.dom('.modal').isVisible()
  })

  test('renders form with item properties', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    const item = store.createRecord('todo-item', {
      name: 'new item!',
      body: 'new item body!',
    })
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(
      hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`)
    )

    assert.dom('.modal input').hasValue('new item!')
    assert.dom('.modal textarea').hasValue('new item body!')
  })

  test('rendered title is "New TODO when the item is new record"', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    const item = store.createRecord('todo-item', { name: 'new item!' })
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(
      hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`)
    )

    assert.dom('.modal').hasTextContaining('New TODO')
    assert.dom('.modal').doesNotContainText('Edit TODO')
  })

  test('rendered title is "Edit TODO when the item is saved record"', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    store.push({
      data: [
        {
          id: '1',
          type: 'todo-item',
          attributes: {
            name: 'new item!',
            body: 'new item body!',
            isCompleted: false,
          },
        },
      ],
    })

    const item = store.peekRecord('todo-item', 1)
    if (item === null) {
      throw new Error('item is null')
    }
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(
      hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`)
    )

    assert.dom('.modal').doesNotContainText('New TODO')
    assert.dom('.modal').hasTextContaining('Edit TODO')
  })

  test('Save record when save button clicked', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    const item = store.createRecord('todo-item', {
      name: 'new item!',
      body: 'new item body!',
    })
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(
      hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`)
    )

    assert.dom('.modal').isVisible()
    const buttons = findAll('.modal button')
    const saveButton = buttons.find(
      (button) => button.textContent?.trim() === 'Save'
    )
    if (!saveButton) {
      throw new Error('saveButton is null')
    }

    this.worker.use(
      rest.post('/api/v1/todo_items', (_req, res, ctx) => {
        return res.once(
          ctx.status(201),
          ctx.set('Content-Type', 'application/vnd.api+json'),
          ctx.json({
            data: {
              type: 'todo-item',
              id: 1,
              attributes: {
                name: 'new item!',
                is_completed: true,
                created_at: '2021-01-01T00:00:00.000Z',
                updated_at: '2021-01-01T00:00:00.000Z',
              },
            },
          })
        )
      })
    )

    await click(saveButton)

    const saveditem = store.peekRecord('todo-item', 1)
    assert.ok(saveditem)
  })
})
