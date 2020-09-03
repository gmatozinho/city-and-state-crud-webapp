import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/city.model';
import { Observable } from 'rxjs/index';
import { ApiService } from './api.service';

@Injectable()
export class CityService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  baseCityUrl: string = `${this.baseUrl}/city`;

  getCities(): Observable<[City]> {
    const response = this.http.get<[City]>(this.baseCityUrl);
    return response;
  }

  getCityById(id: string): Observable<City> {
    const response = this.http.get<City>(`${this.baseCityUrl}/${id}`);
    return response;
  }

  createCity(city: City): Observable<City> {
    const response = this.http.post<City>(this.baseCityUrl, city);
    return response;
  }

  updateCity(city: City): Observable<City> {
    const response = this.http.patch<City>(
      `${this.baseCityUrl}/${city._id}`,
      city
    );
    return response;
  }

  deleteCity(id: string): Observable<City> {
    const response = this.http.delete<City>(`${this.baseCityUrl}/${id}`);
    return response;
  }
}
