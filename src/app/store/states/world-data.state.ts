import { BaseState, initialBaseState } from './base.state';
import { WorldData } from '../../core/models/world-data.model';

export interface WorldDataState extends BaseState {
  worldData: WorldData;
}

export const initialWorldDataState: WorldDataState = {
  ...initialBaseState,
  worldData: null,
};
