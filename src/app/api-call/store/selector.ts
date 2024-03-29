import { createSelector } from '@ngrx/store';
import { RootState } from './reducer';

const getError = (state: RootState): string => state.error;
const getSelectedData = (state: RootState): any => state.selectedMockData;
const logData = (state: RootState) => state.JSONMockData;


const getStateError = createSelector(
  (state: any) => state.rootState,
  getError
);

const getStateSelectedData = createSelector(
  (state: {rootState: RootState}) => state.rootState,
  getSelectedData
);


export { getStateError, getStateSelectedData }

export const getOtpLoginToken = createSelector(
  (state: any) => state.rootState,
  logData

);
