import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drivers } from '../models/drivers.response';
import { catchError } from 'rxjs/internal/operators/catchError';
import { API } from '../api.constants';
import { Vehicles } from '../models/vehicle.response';
import { Vehicletypes } from '../models/vehicletype.response';

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
  getListOfVehicles(): Observable<Vehicles> {
    return this._httpClient.get<Vehicles>(API.getListOfVehicles()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getListOfVehiclesTypes(): Observable<Vehicletypes> {
    console.log('api called');
    return this._httpClient
      .get<Vehicletypes>(API.getListOfVehiclesTypes())
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }


}
