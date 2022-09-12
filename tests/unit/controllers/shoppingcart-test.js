import { module, test } from 'qunit';
import { setupTest } from 'looking-for/tests/helpers';

module('Unit | Controller | shoppingcart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:shoppingcart');
    assert.ok(controller);
  });
});
