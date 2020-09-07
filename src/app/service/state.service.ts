import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { State } from '../model/state.model';
import { Observable } from 'rxjs/index';
import { ApiService } from './api.service';
import { FilterState } from '../model/filterState.model';

@Injectable()
export class StateService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  baseStateUrl: string = `${this.baseUrl}/state`;

  getStates(filter?: FilterState): Observable<[State]> {
    let params = new HttpParams();

    if (filter) {
      Object.keys(filter).forEach((key) => {
        params = params.append(key, filter[key]);
      });
    }

    const response = this.http.get<[State]>(this.baseStateUrl, { params });
    return response;
  }

  getStateById(id: string): Observable<State> {
    const response = this.http.get<State>(`${this.baseStateUrl}/${id}`);
    return response;
  }

  createState(state: State): Observable<State> {
    const response = this.http.post<State>(this.baseStateUrl, state);
    return response;
  }

  updateState(state: State, id: string): Observable<State> {
    const response = this.http.patch<State>(
      `${this.baseStateUrl}/${id}`,
      state
    );
    return response;
  }

  deleteState(id: string): Observable<State> {
    const response = this.http.delete<State>(`${this.baseStateUrl}/${id}`);
    return response;
  }
}
