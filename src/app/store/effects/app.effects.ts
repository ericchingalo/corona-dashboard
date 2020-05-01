import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { defer, of } from 'rxjs';

import { loadData } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  init$ = createEffect(() => defer(() => of(loadData())));
}
