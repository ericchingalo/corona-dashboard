import { BaseState, initialBaseState } from './base.state';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { CountryData } from '../../core/models/country-data.model';

export interface CountryDataState extends BaseState, EntityState<CountryData> {}

export function selectCountryDataByDate(data: CountryData): string {
  return data.date;
}

export function sortDataByDate(data1: CountryData, data2: CountryData): number {
  return data1.date > data2.date ? 1 : data1.date === data2.date ? 0 : -1;
}

export const countryDataAdapter = createEntityAdapter<CountryData>({
  sortComparer: sortDataByDate,
  selectId: selectCountryDataByDate,
});

export const initialAdminsState = countryDataAdapter.getInitialState({
  ...initialBaseState,
});

export const {
  selectAll: selectAllCountryData,
} = countryDataAdapter.getSelectors();
