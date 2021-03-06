import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-toggle-switch', 'Integration | Component | my toggle-switch', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-toggle-switch}}`);

  assert.ok(this.$().text().trim().includes('Off'));
  assert.ok(this.$().text().trim().includes('On'));
});
