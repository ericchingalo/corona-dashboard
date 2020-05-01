import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { WorldData } from '../../../core/models/world-data.model';
import { State } from '../../../store/reducers';
import { CountryData } from '../../../core/models/country-data.model';
import { getCountryData } from '../../../store/selectors/country-data.selector';
import {
  getLatestCountryData,
  getCountryDataLoaded,
} from '../../../store/selectors/country-data.selector';
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
  todaysDate: Date;
  worldData$: Observable<WorldData>;
  latestCountryData$: Observable<CountryData>;
  allCountryData$: Observable<CountryData[]>;
  countryDataLoaded$: Observable<boolean>;
  loadedWorldData$: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.todaysDate = new Date();
    this.worldData$ = this.store.select(getWorldData);
    this.countryDataLoaded$ = this.store.select(getCountryDataLoaded);
    this.loadedWorldData$ = this.store.select(getWorldDataLoaded);
    this.latestCountryData$ = this.store.select(getLatestCountryData);
    this.allCountryData$ = this.store.select(getCountryData);
  }

  openCountryHistory(e) {
    if (e) {
      e.stopPropagation();
    }

    this.router.navigate(['history']);
  }
}
