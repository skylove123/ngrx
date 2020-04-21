import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from '../reducers/product.reducer';
import {AppState} from '../app-state';


const getProductState = createFeatureSelector<AppState, ProductState>('product');

export const getProductList = createSelector(getProductState, (state: ProductState) => state.productList);
export const getProductError = createSelector(getProductState, (state: ProductState) => state.error);
