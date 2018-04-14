import { BoxesService } from './../services/boxes.service';
import { Observable } from 'rxjs/Rx';
import { Box } from './../model/box.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class PhoneDetailsResolverGuard implements Resolve<Box> {

  constructor(
    private router: Router,
    private boxesService: BoxesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Box> {
    return this.boxesService
      .get(route.params['id'])
      .catch(error => {
        this.router.navigate(['/boxes']);
        return Observable.of(error);
      });
  }
}
