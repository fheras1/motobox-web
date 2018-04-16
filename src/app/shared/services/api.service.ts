import { print } from 'util';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class ApiService {
  private BASE_API = environment.baseApi;

  constructor(private http: HttpClient) { }

  getBoxes() {
    return this.http.get(`${this.BASE_API}/boxes`);
  }
}
