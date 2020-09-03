import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient) {}
  baseUrl: string = 'http://localhost:3000';
}
