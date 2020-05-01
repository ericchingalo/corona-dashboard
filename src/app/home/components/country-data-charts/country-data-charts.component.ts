import { Component, OnInit, Input } from '@angular/core';
import { CountryData } from 'src/app/core/models/country-data.model';
import { sanitizeDataByDate } from '../../../core/helpers/sanitize-data-by-date.helper';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-country-data-charts',
  templateUrl: './country-data-charts.component.html',
  styleUrls: ['./country-data-charts.component.scss'],
})
export class CountryDataChartsComponent implements OnInit {
  @Input() countryData: CountryData[];
  lineChart = 'assets/icons/line.png';
  columnChart = 'assets/icons/column.png';
  areaChart = 'assets/icons/area.png';

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.countryData = sanitizeDataByDate(this.countryData);
    this.getAreaChart();
  }

  getAreaChart() {
    this.chartService.generateAreaChart(
      'highchart-container',
      this.countryData
    );
  }

  getColumnChart() {
    this.chartService.generateColumnChart(
      'highchart-container',
      this.countryData
    );
  }

  getLineChart() {
    this.chartService.generateLineChart(
      'highchart-container',
      this.countryData
    );
  }
}
