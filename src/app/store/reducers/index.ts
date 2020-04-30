import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { WorldDataState, CountryDataState } from '../states';
import { countryDataReducer } from './country-data.reducer';
import { worldDataReducer } from './world-data.reducer';

export interface State {
  worldData: WorldDataState;
  countryData: CountryDataState;
}

export const reducers: ActionReducerMap<State> = {
  countryData: countryDataReducer,
  worldData: worldDataReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getRootState = (state: State) => state;
