import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { Select, Store, State } from '@ngxs/store';
import { Product, AddProduct, AddFilteredProducts } from '../../services/dataStore/product.actions';
import { ProductState } from '../../services/dataStore/product.state';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Select(ProductState.getProductDetails) list$: Observable<Product>;
  productList: string[] = [];
  filteredItems: string[] = [];
  categories = new Set();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.readProductList();
  }

  readProductList() {
    //Get previously fetched product list, generate categories
    this.store.select(state => this.productList = state.product.productList)
      .pipe(skipWhile(products => !products))
      .subscribe(products => {
        this.filteredItems = [...this.productList];
        for (const product of products) {
          this.productCategories(product.category);
        }
      });
  }

  productCategories(item: string) {
    if (item.length > 0)
      this.categories.add(item);
  }


  filterItemsByCategory(category: any) {
    this.filteredItems = this.productList.filter((item: any) => {
      return item.category.includes(category);
    })
    if (this.filteredItems.length > 0) {
      this.store.dispatch(new AddFilteredProducts(this.filteredItems))
    }
  }

}
