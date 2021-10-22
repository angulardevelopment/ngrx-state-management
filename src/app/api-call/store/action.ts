import { createAction, props } from '@ngrx/store';

const API_GET_MOCK_DATA = '[Random] Mock API Get My Data';
const API_GET_MOCK_DATA_WITH_ERROR = '[Random] Mock API Get My Data With Error';
const API_ERROR_ACTION = '[Random] Mock API Error';
const API_SUCCESS_ACTION = '[Random] Mock API Success';

//in createAction you need to pass message and object(optional)

// this will be dispatched from some component or service
export const ApiGetMockData = createAction(API_GET_MOCK_DATA, props<{ id: string }>());
// props method is used to define any additional metadata needed for the handling of the action. Action creators provide a consistent, type-safe way to construct an action that is being dispatched.
export const ApiGetMockDataWithError = createAction(API_GET_MOCK_DATA_WITH_ERROR, props<{ id: string }>());

// these will be dispatched by the Effect result
export const ApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());
export const ApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());

export interface DemoStatus {

prop1: string;
prop2: string;

}

export const setJSONData = createAction('API_ACTION', props<DemoStatus>());




