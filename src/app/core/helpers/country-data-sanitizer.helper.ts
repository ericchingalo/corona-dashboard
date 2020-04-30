import * as _ from 'lodash';
import { generateId } from './id-generator.helper';

export function countryDataSanitizer(dataArray: any[]) {
  return _.forEach(dataArray, (data: any) =>
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
  );
}
