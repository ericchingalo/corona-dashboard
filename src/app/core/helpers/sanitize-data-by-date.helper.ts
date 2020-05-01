import * as _ from 'lodash';
import { CountryData } from '../models/country-data.model';

export function sanitizeDataByDate(data: CountryData[]): CountryData[] {
  const requiredData = _.filter(data, (countryData: CountryData) => {
    const startDate = new Date('Mar 16, 2020');
    const dataDate = new Date(countryData.date);

    return dataDate >= startDate;
  });

  console.log(requiredData);
  return requiredData;
}
