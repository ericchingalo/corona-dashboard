import { createAction, props } from '@ngrx/store';
import { CountryData } from '../../core/models/country-data.model';

export const loadCountryData = createAction('[Country] Load Country data');

export const loadCountryDataSuccess = createAction(
  '[Country] Load Country data Success',
  props<{ data: CountryData[] }>()
);

export const loadCountryDataFail = createAction(
  '[Country] Load Country data Fail',
  props<{ error: any }>()
);
