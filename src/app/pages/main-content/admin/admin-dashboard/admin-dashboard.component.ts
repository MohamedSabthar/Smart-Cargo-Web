import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    //added for Jwt testing can remove this
    //this._adminService.test().subscribe((res)=>console.log(res), (err)=>console.log(err));
  }

}
