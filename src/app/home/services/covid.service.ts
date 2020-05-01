import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  country = 'tanzania';
  constructor(private httpClient: HttpClient) {}

  getCountryData(): Observable<any> {
    return this.httpClient.get(
      `https://api.covid19api.com/country/${this.country}`
    );
  }

  getWorldData(): Observable<any> {
    return this.httpClient.get('https://api.covid19api.com/world/total');
  }
}
