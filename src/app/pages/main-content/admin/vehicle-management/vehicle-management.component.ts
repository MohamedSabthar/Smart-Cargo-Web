import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import {StoreKeeperService}from './../../../../services/store-keeper.service';
import{VehicleDetails} from './../../../../models/vehicleDetails';
@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.css'],
  providers: [NgbNavConfig]
})


export class VehicleManagementComponent implements OnInit {

  vehicles: VehicleDetails[];
  constructor(config: NgbNavConfig, private _storekeeperService: StoreKeeperService,) {
    // customize default values of navs used by this component tree

    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
    this._storekeeperService.getListOfVehicles().subscribe(
      (response) => {
        this.vehicles= response.vehicles;
        console.log(this.vehicles);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
