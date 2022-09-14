import Model, { attr } from '@ember-data/model';

export default class ProductsModel extends Model {
  @attr('string') men;
}
