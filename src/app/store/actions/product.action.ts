import {Action} from '@ngrx/store';

export enum ProductActionTypes {
   FETCH_PRODUCT_REQUEST = 'FETCH PRODUCT REQUEST',
   FETCH_PRODUCT_SUCCESS = 'FETCH PRODUCT SUCCESS',
   FETCH_PRODUCT_ERROR = 'FETCH PRODUCT ERROR',
}

export class FetchProductRequestAction implements Action{
  readonly type = ProductActionTypes.FETCH_PRODUCT_REQUEST;
  constructor() {}
}

export class FetchProductSuccessAction implements Action{
  readonly type = ProductActionTypes.FETCH_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class FetchProductErrorAction implements Action{
  readonly type = ProductActionTypes.FETCH_PRODUCT_ERROR;
  constructor(public payload: any) {}
}

export type ProductAction = FetchProductErrorAction | FetchProductRequestAction | FetchProductSuccessAction ;
