import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../model/state.model';
import { Observable } from 'rxjs/index';
import { ApiService } from './api.service';

@Injectable()
export class StateService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }
  baseStateUrl: string = `${this.baseUrl}/state`;

  getStates(): Observable<[State]> {
    const response = this.http.get<[State]>(this.baseStateUrl);
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

  updateState(state: State): Observable<State> {
    const response = this.http.patch<State>(
      `${this.baseStateUrl}/${state._id}`,
      state
    );
    return response;
  }

  deleteState(id: string): Observable<State> {
    const response = this.http.delete<State>(`${this.baseStateUrl}/${id}`);
    return response;
  }
}
