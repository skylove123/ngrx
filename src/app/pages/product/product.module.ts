import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { ProductComponent } from './product.component';
import {StoreModule} from '@ngrx/store';
import {productReducer} from '../../store/reducers/product.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffect} from '../../store/effects/product.effect';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('product',  productReducer),
    EffectsModule.forFeature( [ProductEffect])
  ]
})
export class ProductModule { }
