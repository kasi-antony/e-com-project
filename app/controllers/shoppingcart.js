import Controller from '@ember/controller';

export default class ShoppingcartController extends Controller {
    get price() {
        return this.model.reduce((acc, item) => {
            return acc+item.price;
        },0);
    }
    tax = 50;
    total = 150;
}
