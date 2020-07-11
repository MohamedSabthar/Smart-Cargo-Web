import { AdminService } from './../../../../services/admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DriverDetails } from './../../../../models/driverDetails';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { __assign } from 'tslib';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.css'],
})
export class DriverManagementComponent implements OnInit {
  constructor(
    private _storekeeperService: StoreKeeperService,
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private _modalService: BsModalService
  ) {}

  modalRef: BsModalRef;
  drivers: DriverDetails[];
  selectedDriver: DriverDetails;
  driverUdpateMessage: String;

  updateDriverForm = this._fb.group({
    name: this._fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      middle: ['', [Validators.pattern('[a-zA-Z]*')]],
      last: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    }),
    address: this._fb.group({
      no: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 /]*')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 /]*')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*[0-9]*')]],
    }),
    contact: this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/
          ),
        ],
      ],
    }),
    license_no: ['', [Validators.required]],
    role: ['driver', [Validators.required]], //role feild is hidden in the form
  });

  get updateFirstName() {
    return this.updateDriverForm.get('name.first');
  }

  get updateMiddleName() {
    return this.updateDriverForm.get('name.middle');
  }

  get updateLastName() {
    return this.updateDriverForm.get('name.last');
  }

  get updateNo() {
    return this.updateDriverForm.get('address.no');
  }

  get updateStreet() {
    return this.updateDriverForm.get('address.street');
  }

  get updateCity() {
    return this.updateDriverForm.get('address.city');
  }

  get updateEmail() {
    return this.updateDriverForm.get('contact.email');
  }

  get updatePhone() {
    return this.updateDriverForm.get('contact.phone');
  }

  get updateLicenseNo() {
    return this.updateDriverForm.get('license_no');
  }

  ngOnInit(): void {
    this._storekeeperService.getListOfDrivers().subscribe(
      (response) => {
        this.drivers = response.drivers;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // populate the update form details, when a driver element clicked from list
  onDriverSeletected(driver: DriverDetails) {
    this.selectedDriver = driver;
    this.setUpdateFormData(driver);
    this.disableUpdateButton();
  }

  // Reset the form fields value to previous value
  updateFormReset() {
    this.setUpdateFormData(this.selectedDriver);
  }

  // triggers the update confirmation modal
  confirmUpdate(template: TemplateRef<any>) {
    // this will trigger the modal
    this.modalRef = this._modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  //populate the form feilds with givern details
  setUpdateFormData(driver: DriverDetails) {
    this.updateDriverForm.patchValue({ ...driver, role: 'driver' });
  }

  // triggers when Yer button cliked in confirmation modal
  confirm(): void {
    this._adminService
      .updateDriverDetails(this.updateDriverForm.value, this.selectedDriver._id)
      .subscribe(
        (response) => {
          //change the driver details in the current list after successful update
          const index = this.drivers.indexOf(this.selectedDriver);

          this.selectedDriver = __assign({},this.selectedDriver,this.updateDriverForm.value );
          this.drivers[index] = this.selectedDriver;
          console.log(this.drivers);
          this.disableUpdateButton();
          //display the success alert
          this.driverUdpateMessage = response.message;
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

  // closses the update-successful alert message
  closeUpdateAlert() {
    this.driverUdpateMessage = null;
  }

  //disable the update(save) button until touched
  disableUpdateButton() {
    this.updateDriverForm.markAsPristine();
  }
}
