import { JWTResponse } from './../models/jwt.response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API } from '../api.constants';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _JWTService: JwtHelperService
  ) {}

  public login(credentials): Observable<JWTResponse> {
    console.log(credentials);
    return this._httpClient.post<JWTResponse>(API.login(), credentials).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  public logout() {
    //remove the JWT token from the storage and navigate back to login
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this._router.navigate(['/']);
  }


  public isLoggedIn() {
    console.log(this._JWTService.tokenGetter());
    return !this._JWTService.isTokenExpired();
  }

  //this function return the role admin/store-keeper
  public getRole() {
    return this._JWTService.decodeToken().role;
  }

  public getId(){
   return this._JWTService.decodeToken()._id;

  }

  public forgotPassword(email): Observable<any> {
    console.log(email);
    return this._httpClient.post<any>(API.forgotPassword(), email).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  public resetPassword(token: String, emails): Observable<any> {
    console.log(emails);
    return this._httpClient.put<any>(API.resetPassowrd(token), emails).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
