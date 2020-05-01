import { Injectable } from '@angular/core';
import * as HighCharts from 'highcharts';
import { CountryData } from '../../core/models/country-data.model';
import { getCountryDataPeriods } from '../../core/helpers/get-country-data-periods.helper';
import {
  getConfirmedData,
  getDeathData,
  getRecoveredData,
  getNewCasesData,
} from '../../core/helpers/get-series-data.helper';

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
        text: 'Covid-19 summary in Tanzania',
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
          name: 'Confirmed',
          data: getConfirmedData(data),
        },
        {
          type: undefined,
          name: 'Recovered',
          data: getRecoveredData(data),
        },
        {
          type: undefined,
          name: 'Deaths',
          data: getDeathData(data),
        },
      ],
    });
  }

  generateColumnChart(chart: string, data: CountryData[]) {
    return HighCharts.chart(chart, {
      chart: {
        type: 'column',
        zoomType: 'xy',
      },
      title: {
        text: 'Covid-19 new cases in Tanzania',
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
          name: 'covid-19 new cases',
          data: getNewCasesData(data),
        },
      ],
    });
  }

  generateLineChart(chart: string, data: CountryData[]) {
    return HighCharts.chart(chart, {
      chart: {
        type: 'line',
        zoomType: 'xy',
      },
      title: {
        text: 'Covid-19 confirmed cases in Tanzania ',
      },
      subtitle: {
        text: 'Source: https://covid19api.com',
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
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
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
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
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
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
}
