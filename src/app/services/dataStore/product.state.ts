import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddProduct, Product, AddFilteredProducts } from './product.actions';

export class ProductStateModel { }

@State<ProductStateModel>({
  name: 'product'
})
@Injectable()

export class ProductState {

  constructor() { }


  @Selector()
  static getProductDetails(state: ProductStateModel) {
    return state;
  }

  @Selector()
  static getFilteredProductDetails(state: ProductStateModel) {
    return state;
  }


  @Action(AddProduct)
  async add({ getState, patchState }: StateContext<ProductStateModel>, { payload }: AddProduct) {
    await patchState({
      productList: payload
    });
  }

  @Action(AddFilteredProducts)
  async addByCategory({ getState, patchState }: StateContext<ProductStateModel>, { payload }: AddFilteredProducts) {
    await patchState({
      filteredProductList: payload
    });
  }
}
