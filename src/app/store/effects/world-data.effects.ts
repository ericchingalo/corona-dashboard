import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';

import { WorldData } from '../../core/models/world-data.model';
import { CovidService } from '../../home/services/covid.service';
import {
  loadWorldDataFail,
  loadWorldData,
} from '../actions/world-data.actions';
import { loadData } from '../actions/app.actions';
import { loadWorldDataSuccess } from '../actions/world-data.actions';
import { worldDataSanitizer } from '../../core/helpers/world-data-sanitizer.helper';

@Injectable()
export class WorldDataEffects {
  constructor(private actions: Actions, private covidService: CovidService) {}

  getWorldData$ = createEffect(() =>
    this.actions.pipe(ofType(loadData), mapTo(loadWorldData()))
  );

  loadWorldData$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadWorldData),
      switchMap(() =>
        this.covidService.getWorldData().pipe(
          map((data: WorldData) =>
            loadWorldDataSuccess({ data: worldDataSanitizer(data) })
          ),
          catchError((error: any) => of(loadWorldDataFail(error)))
        )
      )
    )
  );
}
