import { Component, OnInit, Input } from '@angular/core';
import { CountryData } from 'src/app/core/models/country-data.model';

@Component({
  selector: 'app-country-data-charts',
  templateUrl: './country-data-charts.component.html',
  styleUrls: ['./country-data-charts.component.scss'],
})
export class CountryDataChartsComponent implements OnInit {
  @Input() countryData: CountryData[];

  constructor() {}

  ngOnInit() {}
}
