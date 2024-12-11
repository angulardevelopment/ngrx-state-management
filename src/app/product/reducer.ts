import { createReducer, on } from '@ngrx/store';
import { AppState } from './models/AppState';
import { add, remove, clear, updateAllState } from './action';

export const initialState: AppState = {
 products:[],
};

export const favoriteReducer = createReducer(
 initialState,
 on(add, (state, {product}) => (
   {
     ...state,
     products: [...state.products, product]
   }
 )
 ),
 on(remove, (state, {product}) => ({
   ...state,
   products: state.products.filter((p)=> product.id != p.id)
 })),
 on(updateAllState, (state, {products}) => (
   {
     ...state,
     products
   }
 )
 ),
 on(clear, state => initialState)
);
