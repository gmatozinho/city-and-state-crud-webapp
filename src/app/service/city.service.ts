import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { City } from '../model/city.model';
import { Observable } from 'rxjs/index';
import { ApiService } from './api.service';
import { FilterCity } from '../model/filterCity.model';

@Injectable()
export class CityService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  baseCityUrl: string = `${this.baseUrl}/city`;

  getCities(filter?: FilterCity): Observable<[City]> {
    let params = new HttpParams();

    if (filter) {
      Object.keys(filter).forEach((key) => {
        params = params.append(key, filter[key]);
      });
    }
    const response = this.http.get<[City]>(this.baseCityUrl, { params });
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
