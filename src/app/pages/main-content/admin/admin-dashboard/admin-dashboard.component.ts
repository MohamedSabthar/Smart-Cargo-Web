import { CommonService } from './../../../../services/common.service';
import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  //drivers
  onlineDrivers;
  offlineDrivers;

  //orders
  pendingOrders;
  deliveredOrders;

  //routes
  scheduledRoutes;
  deliveredRoutes;

  //list of online drivers
  drivers;

  constructor(
    private _adminService: AdminService,
    commonService: CommonService
  ) {
    this.onlineDrivers = commonService.getOnlineDrivers();
    this.offlineDrivers = commonService.getOfflineDrivers();
    this.deliveredOrders = commonService.getDeliveredOrders();
    this.pendingOrders = commonService.getPendingOrders();
    this.deliveredRoutes = commonService.getDeliveredRoutes();
    this.scheduledRoutes = commonService.getScheduledRoutes();
    this.drivers = commonService.getDrivers();
  }

  ngOnInit(): void {
    //added for Jwt testing can remove this
    //this._adminService.test().subscribe((res)=>console.log(res), (err)=>console.log(err));
  }
}
