import * as _ from 'lodash';
import { generateId } from './id-generator.helper';
import { CountryData } from '../models/country-data.model';

export function countryDataSanitizer(dataArray: any[]): CountryData[] {
  const newDataArray: CountryData[] = [];
  _.forEach(dataArray, (data: any) =>
    newDataArray.push(
      Object.assign(
        {},
        {
          id: generateId(),
          country: data.Country,
          date: data.Date,
          confirmed: data.Confirmed,
          deaths: data.Deaths,
          recovered: data.Recovered,
          active: data.Confirmed - (data.Recovered + data.Deaths),
        }
      )
    )
  );

  return newDataArray;
}
