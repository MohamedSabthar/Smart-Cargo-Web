import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import {StoreKeeperService}from './../../../../services/store-keeper.service';
import{VehicleDetails} from './../../../../models/vehicleDetails';
import{Vehicletype}from './../../../../models/vehicletypeDetails';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.css'],
  providers: [NgbNavConfig]
})


export class VehicleManagementComponent implements OnInit {

  vehicles: VehicleDetails[];
  vehiclesType: Vehicletype[];

  AddVehicleForm:FormGroup;
  
  constructor(config: NgbNavConfig, private _storekeeperService: StoreKeeperService,private fb: FormBuilder) {
    // customize default values of navs used by this component tree

    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {


//validation for add vehicle form
    this.AddVehicleForm = this.fb.group({
      VehicleType:  ['', [
        Validators.required,
        
      ],],
      Capacity:  ['', [
        Validators.required,
        
      ],],

      Load:  ['', [
        Validators.required,
        
      ],],

      Fueleconomy:  ['', [
        Validators.required,
        
      ],],
    });

    this._storekeeperService.getListOfVehicles().subscribe(
      (response) => {
        this.vehicles= response.vehicles;
        console.log(this.vehicles);
      },
      (error) => {
        console.log(error);
      }
    );


  this._storekeeperService.getListOfVehiclesTypes().subscribe(
    (response) => {
      this.vehiclesType= response.vehicletypes;
      console.log(response.vehicletypes);
    },
    (error) => {
      console.log(error);
    }
  );
}

//getters for form validations
get VehicleType() {
  return this.AddVehicleForm.get('VehicleType')
}

get Capacity() {
  return this.AddVehicleForm.get('Capacity')
}
get Load() {
  return this.AddVehicleForm.get('Load')
}
get Fueleconomy() {
  return this.AddVehicleForm.get(' Fueleconomy')
}

}
