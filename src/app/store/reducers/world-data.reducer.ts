import { createReducer, on } from '@ngrx/store';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState,
  WorldDataState,
  initialWorldDataState,
} from '../states';
import {
  loadWorldData,
  loadWorldDataSuccess,
  loadWorldDataFail,
} from '../actions';

export const reducer = createReducer(
  initialWorldDataState,
  on(loadWorldData, (state) => ({ ...state, ...loadingBaseState })),
  on(loadWorldDataSuccess, (state, { data }) => ({
    ...state,
    ...loadedBaseState,
    currentUser: data,
  })),
  on(loadWorldDataFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  }))
);

export function worldDataReducer(state, action): WorldDataState {
  return reducer(state, action);
}
