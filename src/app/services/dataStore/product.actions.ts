export interface Product { }

export class AddProduct {
  static readonly type = '[ProductComponent] Add Product'
  constructor(public payload: Product) { }
}

export class AddFilteredProducts {
  static readonly type = '[ProductComponent] Add Filtered Product'
  constructor(public payload: Product) { }
}

export class GetFilteredProduct {
  static readonly type = '[ProductPage] Get Filtered Product'
}
