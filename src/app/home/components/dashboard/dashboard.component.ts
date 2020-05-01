import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { WorldData } from '../../../core/models/world-data.model';
import { State } from '../../../store/reducers';
import {
  getWorldData,
  getWorldDataLoaded,
} from '../../../store/selectors/world-data.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  worldData$: Observable<WorldData>;
  loadedWorldData$: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.worldData$ = this.store.select(getWorldData);
    this.loadedWorldData$ = this.store.select(getWorldDataLoaded);
  }
}
