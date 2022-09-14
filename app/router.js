import EmberRouter from '@ember/routing/router';
import config from 'looking-for/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/item/:item_id' });
  this.route('shopping-cart', { path: 'cart' });
  this.route('not-found', { path: '/*path' });
});
