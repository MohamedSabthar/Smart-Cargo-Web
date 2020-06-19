import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-keeper-dashboard',
  templateUrl: './store-keeper-dashboard.component.html',
  styleUrls: ['./store-keeper-dashboard.component.css']
})
export class StoreKeeperDashboardComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    //Manual testing for ErrorInterceptor can remove this
   // this._adminService.test().subscribe((res)=>console.log(res), (err)=>console.log(err));
  }

}
