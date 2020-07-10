import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getOnlineDrivers() {
    return 20;
  }

  getOfflineDrivers() {
    return 15;
  }

  getPendingOrders() {
    return 25;
  }

  getDeliveredOrders() {
    return 30;
  }

  getScheduledRoutes() {
    return 10;
  }

  getDeliveredRoutes() {
    return 8;
  }

  getDrivers() {
    return ['Ronaldo, Messi, Suarez, Neymar'];
  }
}
