import { Box } from './../model/box.model';
import { BaseApiService } from './base-api.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BoxesService extends BaseApiService {
  private static readonly BOXES_API = `${BaseApiService.BASE_API}/boxes`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Box>> {
    return this.http.get(BoxesService.BOXES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Box> {
    return this.http.get(`${BoxesService.BOXES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(box: Box): Observable<Box> {
    return this.http.post(BoxesService.BOXES_API, box.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(box: Box): Observable<Box> {
    return this.http.put(`${BoxesService.BOXES_API}/${box.id}`, box.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${BoxesService.BOXES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
