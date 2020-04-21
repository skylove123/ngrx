import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {FetchProductErrorAction, FetchProductSuccessAction, ProductAction, ProductActionTypes} from '../actions/product.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ProductService} from '../../services/product-service/product.service';
import {Product} from '../reducers/product.reducer';

@Injectable()
export class ProductEffect {

  constructor(private actions$: Actions, private productService: ProductService) {
  }

   @Effect()
   fetchProduct$: Observable<Action> = this.actions$.pipe(
     ofType<ProductAction>(
       ProductActionTypes.FETCH_PRODUCT_REQUEST
     ),
     mergeMap((data) => this.productService.getProduct().pipe(
        map(
            ((product: Product) => {
                return new FetchProductSuccessAction(product);
            })
           ),
       catchError(err => of(new FetchProductErrorAction('Fetch data error')))
     ))
   );
}
