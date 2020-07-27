import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { VehicleDetails } from './../../../../models/vehicleDetails';
import { VehicletypeDetails } from './../../../../models/vehicletypeDetails';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.css'],
  providers: [NgbNavConfig],
})
export class VehicleManagementComponent implements OnInit {
  vehicles: VehicleDetails[];
  vehiclesType: VehicletypeDetails[];

  AddVehicleForm: FormGroup;
  NewVehicleForm: FormGroup;

  searchText: string;
  vehiclesFilter: VehicleDetails[];
  selectedVehicle: VehicleDetails;

  constructor(
    config: NgbNavConfig,
    private _storekeeperService: StoreKeeperService,
    private fb: FormBuilder
  ) {
    // customize default values of navs used by this component tree

    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
    //validation for update vehicle form
    this.AddVehicleForm = this.fb.group({
      vehicle_type: ['', [Validators.required]],
      Capacity: ['', [Validators.required]],
      license_plate: ['',[Validators.required]],
      Load: ['', [Validators.required]],

      Fueleconomy: ['', [Validators.required]],
    });


     //validation for add new vehicle form
     this.NewVehicleForm = this.fb.group({
       NewVehicleType: ['', [Validators.required]],
       NewLisencePlate: ['', [Validators.required]],
      NewCapacity: ['', [Validators.required]],

      NewLoad: ['', [Validators.required]],

      NewFueleconomy: ['', [Validators.required]],
    });

    this._storekeeperService.getListOfVehicles().subscribe(
      (response) => {
        this.vehicles = response.vehicles;
        console.log(this.vehicles);
      },
      (error) => {
        console.log(error);
      }
    );


  }
  
    // populate the update form details, when a driver element clicked from list
    onVehicleSeletected(vehicle: VehicleDetails) {
      this.selectedVehicle = vehicle;
      console.log('vehicle');
      this.setUpdateFormData(vehicle);
      this.disableUpdateButton();
    }

    //populate the form feilds with givern details
  setUpdateFormData(vehicle: VehicleDetails) {
    console.log(vehicle);
    this.AddVehicleForm.patchValue({
      vehicle_type: vehicle.vehicle_type,
      license_plate: vehicle.license_plate
    });
  }
  
    //disable the update(save) button until touched
    disableUpdateButton() {
      this.AddVehicleForm.markAsPristine();
    }

  //getters for form validations
  get vehicle_type() {
    return this.AddVehicleForm.get('vehicle_type');
  }

  get Capacity() {
    return this.AddVehicleForm.get('Capacity');
  }
  get Load() {
    return this.AddVehicleForm.get('Load');
  }
  get Fueleconomy() {
    return this.AddVehicleForm.get('Fueleconomy');
  }
  get license_plate() {
    return this.AddVehicleForm.get('license_plate');
  }
 

  get NewLisencePlate() {
    return this.NewVehicleForm.get('NewLisencePlate');
  }

  get NewVehicleType() {
    return this.NewVehicleForm.get('NewVehicleType');
  }

  get NewCapacity() {
    return this.NewVehicleForm.get('NewCapacity');
  }
  get NewLoad() {
    return this.NewVehicleForm.get('NewLoad');
  }
  get NewFueleconomy() {
    return this.NewVehicleForm.get('NewFueleconomy');
  }


  onSearch() {
    console.log(this.searchText);
    this.vehiclesFilter = this.vehicles.filter((vehicle) => {
      let license_plate: string = `${vehicle.license_plate}`;
      console.log(this.vehiclesFilter);
      return license_plate.search(this.searchText.toUpperCase()) != -1;
    });
  }
}
