import { render, TestContext } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
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
  })
})
