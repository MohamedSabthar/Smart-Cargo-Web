import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _httpClient:HttpClient) { }

  //manual testing to check JwtIntercepter can remove this
  test():Observable<any> {
    return this._httpClient.get<any>('http://localhost:3000/admin').pipe(catchError((error)=>{return throwError(error);}));
  }
}
