import { NewOrders } from './../models/newOrders.response';
import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drivers } from '../models/drivers.response';
import { catchError } from 'rxjs/internal/operators/catchError';
import { API } from '../api.constants';

@Injectable({
  providedIn: 'root',
})
export class StoreKeeperService {
  constructor(private _httpClient: HttpClient) {}

  getListOfDrivers(): Observable<Drivers> {
    return this._httpClient.get<Drivers>(API.getListOfDrivers()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getNewOrders(): Observable<NewOrders> {
    return this._httpClient.get<NewOrders>(API.getNewOrders()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
