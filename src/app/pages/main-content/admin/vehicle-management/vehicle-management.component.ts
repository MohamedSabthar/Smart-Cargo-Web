import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminService } from './../../../../services/admin.service';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { VehicleDetails } from './../../../../models/vehicleDetails';
import { VehicletypeDetails } from './../../../../models/vehicletypeDetails';
import { __assign } from 'tslib';
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

  modalRef: BsModalRef;
  vehicleUdpateMessage: String;

  constructor(
    config: NgbNavConfig,
    private _storekeeperService: StoreKeeperService,
    private fb: FormBuilder,
    private _adminService: AdminService,
    private _modalService: BsModalService
  ) {
    // customize default values of navs used by this component tree

    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
    //validation for update vehicle form
    this.AddVehicleForm = this.fb.group({
      vehicle_type: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      license_plate: ['',[Validators.required]],
      load: ['', [Validators.required]],

      fuel_economy: ['', [Validators.required]],
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
  
    // triggers the update confirmation modal
    confirmUpdate(template: TemplateRef<any>) {
      // this will trigger the modal
      this.modalRef = this._modalService.show(template, {
        class: 'modal-md modal-dialog-centered',
      });
  }


   // triggers when Yer button cliked in confirmation modal
   confirm(): void {
    this._adminService
      .updateVehicleDetails(this.AddVehicleForm.value, this.selectedVehicle._id)
      .subscribe(
        (response) => {
          //change the vehicle details in the current list after successful update
          const index = this.vehicles.indexOf(this.selectedVehicle);

          this.selectedVehicle = __assign(
            {},
            this.selectedVehicle,
            this.AddVehicleForm.value
          );
          this.vehicles[index] = this.selectedVehicle;
          console.log(this.vehicles);
          this.disableUpdateButton();
          //display the success alert
          this.vehicleUdpateMessage = response.message;
        },
        (error) => {
          console.log(error);
        }
      );
    this.modalRef.hide();
  }
  
  
  // triggers when No button cliked in confirmation modal
  decline(): void {
    // reset the data in update form if declined
    this.updateFormReset();
    this.modalRef.hide();
  }

    // Reset the form fields value to previous value
    updateFormReset() {
      this.setUpdateFormData(this.selectedVehicle);
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
      license_plate: vehicle.license_plate,
      capacity: vehicle.capacity,
      load: vehicle.load,
      fuel_economy: vehicle.fuel_economy
    });
  }
  
    //disable the update(save) button until touched
    disableUpdateButton() {
      this.AddVehicleForm.markAsPristine();
  }
  

  onDelete(vehicle: VehicleDetails) {
    this._adminService.deleteVehicle(vehicle._id).subscribe(
      (response) => {
        let index = this.vehicles.indexOf(vehicle);
        this.vehicles.splice(index, 1); //delete driver from local list
        this.selectedVehicle = null; // set the selected driver to null to hide the update/details component
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //getters for form validations
  get vehicle_type() {
    return this.AddVehicleForm.get('vehicle_type');
  }

  get capacity() {
    return this.AddVehicleForm.get('capacity');
  }
  get load() {
    return this.AddVehicleForm.get('load');
  }
  get fuel_economy() {
    return this.AddVehicleForm.get('fuel_economy');
  }
  get license_plate() {
    return this.AddVehicleForm.get('license_plate');
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
