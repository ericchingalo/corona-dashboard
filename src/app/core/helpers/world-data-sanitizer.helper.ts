import { WorldData } from '../models/world-data.model';

export function worldDataSanitizer(data: any): WorldData {
  const worldData: WorldData = Object.assign(
    {},
    {
      totalConfirmed: data.TotalConfirmed,
      totalDeaths: data.TotalDeaths,
      totalRecovered: data.TotalRecovered,
    }
  );

  return worldData;
}
