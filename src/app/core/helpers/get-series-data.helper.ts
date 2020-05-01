import * as _ from 'lodash';
import { CountryData } from '../models/country-data.model';

export function getConfirmedData(data: CountryData[]) {
  const confirmedData: number[] = [];
  _.forEach(data, (countryData: CountryData) =>
    confirmedData.push(countryData.confirmed)
  );

  return confirmedData;
}

export function getRecoveredData(data: CountryData[]) {
  const recoveredData: number[] = [];
  _.forEach(data, (countryData: CountryData) =>
    recoveredData.push(countryData.recovered)
  );

  return recoveredData;
}

export function getDeathData(data: CountryData[]) {
  const deathData: number[] = [];
  _.forEach(data, (countryData: CountryData) =>
    deathData.push(countryData.deaths)
  );

  return deathData;
}

export function getActiveData(data: CountryData[]) {
  const activeData: number[] = [];
  _.forEach(data, (countryData: CountryData) =>
    activeData.push(countryData.active)
  );

  return activeData;
}

export function getNewCasesData(data: CountryData[]) {
  const newCaseData: number[] = [];
  let count = -1;
  _.forEach(data, (countryData: CountryData) => {
    if (data[0] === countryData) {
      newCaseData.push(countryData.confirmed);
    } else {
      newCaseData.push(countryData.confirmed - data[count].confirmed);
    }
    count++;
  });

  return newCaseData;
}
