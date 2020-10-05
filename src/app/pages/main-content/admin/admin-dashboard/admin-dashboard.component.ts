import { AdminService } from './../../../../services/admin.service';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { DriverDetails } from './../../../../models/driverDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  //list of online drivers
  drivers: DriverDetails[];

  //drivers
  offlineDrivers = 4;
  //onlineDrivers = this.drivers.length;
  //orders
  pendingOrders = 22;
  deliveredOrders = 15;

  //routes
  scheduledRoutes = 18;
  deliveredRoutes = 12;



  constructor(
    private _adminService: AdminService,
    private _storekeeperService: StoreKeeperService
  ) {}

  ngOnInit(): void {
    //added for Jwt testing can remove this
    //this._adminService.test().subscribe((res)=>console.log(res), (err)=>console.log(err));


    this._storekeeperService.getListOfDrivers().subscribe(
      (response) => {
        this.drivers = response.drivers;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
