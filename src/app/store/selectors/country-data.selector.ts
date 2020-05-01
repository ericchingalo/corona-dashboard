import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { getRootState, State } from '../reducers';
import { selectAllCountryData } from '../states';
import { CountryDataState } from '../states/country-data.state';
import { CountryData } from '../../core/models/country-data.model';

export const getCountryDataState = createSelector(
  getRootState,
  (state: State) => state.countryData
);

export const getCountryData = createSelector(
  getCountryDataState,
  selectAllCountryData
);

export const getLatestCountryData = createSelector(
  getCountryData,
  (countryData: CountryData[]) => {
    const latestData = _.last(countryData);
    return latestData;
  }
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
