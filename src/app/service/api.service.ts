import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient) {}
  baseUrl: string = environment.apiUrl;
}
