import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router:Router){};

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //catch unauthorized errors and redirect to forbidden page
    return next.handle(req).pipe(catchError(err => {
      if(err.status == 403 )
        this._router.navigate(['/forbidden']);
      return throwError(err);
    }));
  }
}
