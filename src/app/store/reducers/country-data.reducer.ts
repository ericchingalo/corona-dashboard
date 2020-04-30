import { createReducer, on } from '@ngrx/store';
import {
  loadCountryDataFail,
  loadCountryData,
  loadCountryDataSuccess,
} from '../actions';

import {
  CountryDataState,
  initialCountryDataState,
  countryDataAdapter,
  loadingBaseState,
  errorBaseState,
  loadedBaseState,
} from '../states';

export const reducer = createReducer(
  initialCountryDataState,
  on(loadCountryData, (state) => ({ ...state, ...loadingBaseState })),
  on(loadCountryDataFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
  })),
  on(loadCountryDataSuccess, (state, { data }) =>
    countryDataAdapter.addMany(data, { ...state, ...loadedBaseState })
  )
);

export function countryDataReducer(state, action): CountryDataState {
  return reducer(state, action);
}
