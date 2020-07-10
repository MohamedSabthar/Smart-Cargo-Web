import { DriverDetails } from './../../../../models/driverDetails';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.css']
})
export class DriverManagementComponent implements OnInit {

  constructor(private _storekeeperService:StoreKeeperService) { }
  drivers:DriverDetails[]

  ngOnInit(): void {
    this._storekeeperService.getListOfDrivers().subscribe((response)=>{
      this.drivers= response.drivers;
    }, (error)=>{console.log(error)})
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }

}
