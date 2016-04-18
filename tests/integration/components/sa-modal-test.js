import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sa-modal', 'Integration | Component | sa modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sa-modal}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('openWhen', false);
  // Template block usage:
  this.render(hbs`
    {{#sa-modal open-when=openWhen}}
      template block text
    {{/sa-modal}}
  `);

  this.set('openWhen', true);

  assert.ok(this.$().text().trim().indexOf('template block text') > 0);
});
