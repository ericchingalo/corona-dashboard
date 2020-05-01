import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { WorldDataState } from '../states/world-data.state';

export const getWorldDataState = createSelector(
  getRootState,
  (state: State) => state.worldData
);

export const getWorldData = createSelector(
  getWorldDataState,
  (state: WorldDataState) => state.worldData
);

export const getWorldDataLoading = createSelector(
  getWorldDataState,
  (state: WorldDataState) => state.loading
);

export const getWorldDataLoaded = createSelector(
  getWorldDataState,
  (state: WorldDataState) => state.loaded
);

export const getWorldDataError = createSelector(
  getWorldDataState,
  (state: WorldDataState) => state.error
);
