import Route from '@ember/routing/route';

export default class ShoppingCartRoute extends Route {
    model() {
        const items = [{ price: 10},{price: 15}];
        return items;
    }
}
