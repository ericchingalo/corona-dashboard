import { BaseState, initialBaseState } from './base.state';
import { WorldData } from '../../core/models/world-data.model';

export interface WorldDataState extends BaseState {
  worldData: WorldData;
}

export const initialCurrentUserState: WorldDataState = {
  ...initialBaseState,
  worldData: null,
};
