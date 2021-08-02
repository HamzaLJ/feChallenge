import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Product } from './services/dataStore/product.actions';
import { ProductState } from './services/dataStore/product.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @Select(ProductState.getProductDetails) filteredItems: Observable<Product>;

  constructor() { }

}
