import Route from '@ember/routing/route';
import EmberResolver from 'ember-resolver';

export default class ShoppingCartRoute extends Route {
  model() {
    // const items = [{ price: 10 }, { price: 15 }];
    // return items;

    return [
      {cloths: 'Shirts',status: 'available'},
      {cloths: 'kurthi',status: 'available'},
      {cloths: 'pant',status: 'available'},
      {cloths: 'chudi',status: 'NA'},
    ]

  }


}
