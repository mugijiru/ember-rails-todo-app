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
})
