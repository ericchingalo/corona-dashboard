import { createAction, props } from '@ngrx/store';
import { WorldData } from '../../core/models/world-data.model';

export const loadWorldData = createAction('[WORLD] Load World data');

export const loadWorldDataSuccess = createAction(
  '[WORLD] Load World data Success',
  props<{ data: WorldData }>()
);

export const loadWorldDataFail = createAction(
  '[WORLD] Load World data Fail',
  props<{ error: any }>()
);
