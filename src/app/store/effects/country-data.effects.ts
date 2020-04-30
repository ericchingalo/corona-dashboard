import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';

import { CovidService } from '../../home/services/covid.service';
import {
  loadData,
  loadCountryData,
  loadCountryDataSuccess,
  loadCountryDataFail,
} from '../actions';
import { CountryData } from '../../core/models/country-data.model';

@Injectable()
export class CountryDataEffects {
  constructor(private actions: Actions, private covidService: CovidService) {}

  getCountryData$ = createEffect(() =>
    this.actions.pipe(ofType(loadData), mapTo(loadCountryData()))
  );

  loadCountryData$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadCountryData),
      switchMap(() =>
        this.covidService.getCountryData().pipe(
          map((data: CountryData[]) => loadCountryDataSuccess({ data })),
          catchError((error: any) => of(loadCountryDataFail({ error })))
        )
      )
    )
  );
}
