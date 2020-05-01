import { Injectable } from '@angular/core';
import * as HighCharts from 'highcharts';
import { CountryData } from '../../core/models/country-data.model';
import { getCountryDataPeriods } from '../../core/helpers/get-country-data-periods.helper';
import { getConfirmedData } from '../../core/helpers/get-series-data.helper';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  generateAreaChart(chart: string, data: CountryData[]) {
    return HighCharts.chart(chart, {
      chart: {
        type: 'area',
        zoomType: 'xy',
      },
      title: {
        text: 'Covid-19 confirmed cases in Tanzania',
      },
      subtitle: {
        text: 'Source: https://covid19api.com',
      },
      xAxis: {
        categories: getCountryDataPeriods(data),
        tickmarkPlacement: 'on',
        title: {
          text: 'Dates',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of people',
          align: 'high',
        },
      },
      tooltip: {
        valueSuffix: ' people',
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666',
          },
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                enabled: false,
              },
            },
          },
        ],
      },
      series: [
        {
          type: undefined,
          name: 'covid-19 confirmed cases',
          data: getConfirmedData(data),
        },
      ],
    });
  }

  // generateBarChart() {}

  // generateLineChart() {}
}
