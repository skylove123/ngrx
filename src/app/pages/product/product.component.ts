import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {FetchProductRequestAction} from '../../store/actions/product.action';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app-state';
import * as productSelector from '../../store/selectors/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList$: Observable<any>;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  fetchProduct() {
    this.store.dispatch(new FetchProductRequestAction());
  }

  ngOnInit(): void {
     this.productList$ = this.store.pipe(select(productSelector.getProductList));
     this.error$ = this.store.pipe(select(productSelector.getProductError));
  }

}
