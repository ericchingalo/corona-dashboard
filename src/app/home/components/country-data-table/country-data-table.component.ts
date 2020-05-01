import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { CountryData } from 'src/app/core/models/country-data.model';
import { State } from '../../../store/reducers/index';
import { getCountryData } from '../../../store/selectors/country-data.selector';
import { sanitizeDataByDate } from '../../../core/helpers/sanitize-data-by-date.helper';

@Component({
  selector: 'app-country-data-table',
  templateUrl: './country-data-table.component.html',
  styleUrls: ['./country-data-table.component.scss'],
})
export class CountryDataTableComponent implements OnInit, OnDestroy {
  countryDataSubscription: Subscription;
  countryData: CountryData[];
  displayedColumns: string[] = [
    'date',
    'confirmed',
    'deaths',
    'recovered',
    'active',
  ];
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.countryDataSubscription = this.store
      .select(getCountryData)
      .subscribe((data: CountryData[]) => (this.countryData = data));
    this.countryData = sanitizeDataByDate(this.countryData);
  }

  ngOnDestroy() {
    if (this.countryDataSubscription) {
      this.countryDataSubscription.unsubscribe();
    }
  }
}
