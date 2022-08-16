import { createReducer, on } from '@ngrx/store';
import { ApiError, ApiSuccess } from './action';
import * as DemoAction from './action';

// !! ApiGetMockData and ApiGetMockDataWithError not used because it is handled in ./effects

export interface RootState {
  error: any;
  selectedMockData: { id: string, data: string };

  JSONMockData: { prop1: string };

}

const initialState: RootState = {
  error: null,
  selectedMockData: null,

  JSONMockData: null,
}


export const rootReducer = createReducer(initialState,
  // action - > payload
  on(ApiError, (state, action) => ({ error: action.error, selectedMockData: null, JSONMockData: null })),
  on(ApiSuccess, (state, action) => ({ selectedMockData: action.data, error: null, JSONMockData: null })),

  on(DemoAction.setJSONData, (state, payload) => ({
    ...state,
    message: payload.prop1,

  })),

  // on(LoginAction.codeExpired, (state, payload) => {
  //   const codeExpired = {
  //     code: payload.code,
  //     message: payload.message
  //   };
  //   return {
  //     ...state,
  //     codeExpired: { ...codeExpired }
  //   };
  // }),
)
