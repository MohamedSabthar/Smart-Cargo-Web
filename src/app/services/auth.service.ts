import { JWTResponse } from './../models/jwt.response';
import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Router } from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";


import { API } from '../api.constants';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient:HttpClient,private _router:Router,private _JWTService:JwtHelperService) { }

  public login(credentials): Observable<JWTResponse> {
    console.log(credentials);
    return this._httpClient
      .post<JWTResponse>(API.login(), credentials)
      .pipe(catchError((error)=>{return throwError(error);}));
  }

  public logout() {
    //remove the JWT token from the storage and navigate back to login
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }

  public isLoggedIn(){
    return !this._JWTService.isTokenExpired();
  }

  //this function return the role admin/store-keeper
  public getRole(){
    return this._JWTService.decodeToken().role;
  }

}
