import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { selectAllCountryData } from '../states';
import { CountryDataState } from '../states/country-data.state';

export const getCountryDataState = createSelector(
  getRootState,
  (state: State) => state.countryData
);

export const getCountryData = createSelector(
  getCountryDataState,
  selectAllCountryData
);

export const getCountryDataLoading = createSelector(
  getCountryDataState,
  (state: CountryDataState) => (state ? state.loading : true)
);

export const getCountryDataLoaded = createSelector(
  getCountryDataState,
  (state: CountryDataState) => (state ? state.loaded : true)
);

export const getCountryDataError = createSelector(
  getCountryDataState,
  (state: CountryDataState) => (state ? state.error : true)
);
