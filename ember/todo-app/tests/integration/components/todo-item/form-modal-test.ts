import { find, findAll, render, TestContext } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { module, test } from "qunit";
import { setupRenderingTest } from "todo-app/tests/helpers";

import TodoItemModel from "todo-app/models/todo-item";

interface Context extends TestContext {
  item?: TodoItemModel;
  close: () => void;
}

module("Integration | Component | todo-item/form-modal", function (hooks) {
  setupRenderingTest(hooks)

  test('renders form with item properties', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    const item = store.createRecord('todo-item', { name: 'new item!', body: 'new item body!' })
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`))

    assert.dom('.modal input').hasValue('new item!');
    assert.dom('.modal textarea').hasValue('new item body!');
  })

  test('rendered title is "New TODO when the item is new record"', async function (this: Context, assert) {
    const store = this.owner.lookup('service:store')
    const item = store.createRecord('todo-item', { name: 'new item!' })
    this.item = item
    this.close = () => {} // eslint-disable-line @typescript-eslint/no-empty-function
    await render(hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`))

    assert.dom('.modal').hasTextContaining('New TODO');
    assert.dom('.modal').doesNotContainText('Edit TODO');
  })

  test('rendered title is "New TODO when the item is new record"', async function (this: Context, assert) {
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
    await render(hbs(`<TodoItem::FormModal @item={{this.item}} @close={{this.close}}/>`))

    assert.dom('.modal').doesNotContainText('New TODO');
    assert.dom('.modal').hasTextContaining('Edit TODO');
  })
})
