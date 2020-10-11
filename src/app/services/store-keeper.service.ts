import { Drivers } from './../models/drivers.response';
import { Schedule } from './../models/schedule.response';
import { NewOrders } from './../models/newOrders.response';
import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { API } from '../api.constants';
import { Vehicles } from '../models/vehicle.response';
import { Vehicletypes } from '../models/vehicletype.response';
import { StorekeeperDetails } from './../models/storekeeperDetails';
import { Storekeepers } from '../models/storekeeper.response';
import { DepotDetails } from '../models/depotDetails';
import { Orders } from '../models/orderDetails';
import { error } from 'console';

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

  getListOfVehicles(): Observable<Vehicles> {
    return this._httpClient.get<Vehicles>(API.getListOfVehicles()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getListOfVehiclesTypes(): Observable<any> {
    console.log('api called');
    return this._httpClient
      .get<any>(API.getListOfVehiclesTypes())
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  getVehicleType(vehicleId): Observable<any>{
    return this._httpClient.get<any>(API.getVehicleType(vehicleId))
    .pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getScheduledOrders(): Observable<any> {
    return this._httpClient.get<any>(API.getScheduledOrders()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getProfile(userId): Observable<{ result: StorekeeperDetails }> {
    return this._httpClient
      .get<{ result: StorekeeperDetails }>(API.getProfile(userId))
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  updateProfile(userId, StorekeeperDetails): Observable<any> {
    return this._httpClient
      .put<any>(API.updateProfile(userId), StorekeeperDetails)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  updatePassword(userId, resetPasswordDetails): Observable<any> {
    return this._httpClient
      .put<any>(API.updatePassword(userId), resetPasswordDetails)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  getUrgentOrders(): Observable<any> {
    return this._httpClient.get<any>(API.getUrgencyOrders()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getDeopt(): Observable<DepotDetails> {
    return this._httpClient.get<DepotDetails>(API.getDepot()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getClusteredStat(): Observable<any>{
    return this._httpClient.get<any>(API.getClusteredStat()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateDimensions(orderDimension, orderID): Observable<Orders> {
    return this._httpClient
      .put<Orders>(API.updateDimension(), { ...orderDimension, id: orderID })
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  getAvailableDrivers(): Observable<Drivers> {
    return this._httpClient.get<Drivers>(API.getAvailableDrivers()).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  assignDriver(driverID): Observable<Drivers> {
    return this._httpClient.put<Drivers>(API.assignDriver(), driverID).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
