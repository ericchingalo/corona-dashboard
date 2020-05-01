import * as _ from 'lodash';
import { CountryData } from '../models/country-data.model';

export function getConfirmedData(data: CountryData[]) {
  const seriesData: number[] = [];
  _.forEach(data, (countryData: CountryData) =>
    seriesData.push(countryData.confirmed)
  );

  return seriesData;
}
