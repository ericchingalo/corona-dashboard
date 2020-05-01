import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { CountryData } from 'src/app/core/models/country-data.model';
import { State } from '../../../store/reducers/index';
import { getCountryData } from '../../../store/selectors/country-data.selector';
import { sanitizeDataByDate } from '../../../core/helpers/sanitize-data-by-date.helper';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-country-data-table',
  templateUrl: './country-data-table.component.html',
  styleUrls: ['./country-data-table.component.scss'],
})
export class CountryDataTableComponent implements OnInit, OnDestroy {
  countryDataSubscription: Subscription;
  dataSource: MatTableDataSource<CountryData>;
  countryData: CountryData[];
  displayedColumns: string[] = [
    'date',
    'confirmed',
    'deaths',
    'recovered',
    'active',
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.countryDataSubscription = this.store
      .select(getCountryData)
      .subscribe((data: CountryData[]) => {
        this.countryData = data;
        this.countryData = sanitizeDataByDate(this.countryData);
        this.dataSource = new MatTableDataSource(this.countryData);
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy() {
    if (this.countryDataSubscription) {
      this.countryDataSubscription.unsubscribe();
    }
  }
}
