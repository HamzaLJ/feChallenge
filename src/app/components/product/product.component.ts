import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from '../../services/dataStore/product.actions';
import { Product } from '../../services/dataStore/product.actions';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
  selector: 'product-block',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  dataURL: string = '../assets/json/products.json';
  @Input() products: any;

  constructor(private utils: UtilsService, private store: Store) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.utils.httpGet(this.dataURL).toPromise()
      .then((products:any) => {
        this.products = products;
        this.store.dispatch(new AddProduct(products))
      })
      .catch(err => {
        console.log('Error ', err)
      })
      .finally(() => {
        console.log('Data loaded successfully!')
      })
  }

}
