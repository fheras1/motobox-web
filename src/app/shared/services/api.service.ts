import { print } from 'util';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  getBoxes() {
    return this.http.get('http://localhost:3000/boxes');
  }
}
