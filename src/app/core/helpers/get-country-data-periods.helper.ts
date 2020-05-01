import * as _ from 'lodash';
import * as moment from 'moment';

import { CountryData } from '../models/country-data.model';

export function getCountryDataPeriods(countryData: CountryData[]) {
  const periods: string[] = [];
  _.forEach(countryData, (data: CountryData) =>
    periods.push(moment(data.date).format('DD MMMM YYYY'))
  );

  return periods;
}
