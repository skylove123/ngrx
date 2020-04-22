import {ProductAction, ProductActionTypes} from '../actions/product.action';

export interface Product {
   id: string;
   name: string;
   price: number;
}

export interface ProductState {
   productList: Array<Product> ;
   error: string;
   loading: boolean;
}

const initialState: ProductState = {
   productList: [],
   error: '',
   loading: false
};

export function productReducer(state: ProductState = initialState,  action: ProductAction) {
    switch (action.type) {
      case ProductActionTypes.FETCH_PRODUCT_REQUEST:
  /*      return Object.assign({}, state, {
        loading: true
      });*/
        return {...state, loading: true};
      case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
        return {...state, loading: false, productList: action.payload};
      case ProductActionTypes.FETCH_PRODUCT_ERROR:
        return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
}
