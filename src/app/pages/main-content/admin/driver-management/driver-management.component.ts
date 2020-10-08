import { ViewOrderDetailsComponent } from './../../../../components/view-order-details/view-order-details.component';
import { Orders } from './../../../../models/orderDetails';
import { ScheduleDetails } from './../../../../models/scheduleDetails';
import { AdminService } from './../../../../services/admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DriverDetails } from './../../../../models/driverDetails';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { __assign } from 'tslib';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private _modalService: BsModalService,
    private _modalComponentService:NgbModal
  ) {}

  modalRef: BsModalRef;
  drivers: DriverDetails[];
  driversFilter: DriverDetails[];
  selectedDriver: DriverDetails;
  driverUdpateMessage: string;
  searchText: string;
  driverScheduleHistory: ScheduleDetails[];
  selectedSchedule: ScheduleDetails;

  updateDriverForm = this._fb.group({
    name: this._fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      middle: ['', [Validators.pattern('[a-zA-Z]*')]],
      last: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    }),
    address: this._fb.group({
      no: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/ ]*')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/, ]*')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]* [0-9]*')]],
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
    this.clearDeliveies();
    this.fetchDriverScheduleHistory(driver);
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

  // triggers the delete confirmation modal
  confirmDelete(template: TemplateRef<any>) {
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
    console.log(this.updateDriverForm.value);
    this._adminService
      .updateDriverDetails(this.updateDriverForm.value, this.selectedDriver._id)
      .subscribe(
        (response) => {
          //change the driver details in the current list after successful update
          const index = this.drivers.indexOf(this.selectedDriver);

          this.selectedDriver = __assign(
            {},
            this.selectedDriver,
            this.updateDriverForm.value
          );
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

  //.............................faiz
  registerDriverForm = this._fb.group({
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

  get registerFirstName() {
    return this.registerDriverForm.get('name.first');
  }

  get registerMiddleName() {
    return this.registerDriverForm.get('name.middle');
  }

  get registerLastName() {
    return this.registerDriverForm.get('name.last');
  }

  get registerNo() {
    return this.registerDriverForm.get('address.no');
  }

  get registerStreet() {
    return this.registerDriverForm.get('address.street');
  }

  get registerCity() {
    return this.registerDriverForm.get('address.city');
  }

  get registerEmail() {
    return this.registerDriverForm.get('contact.email');
  }

  get registerPhone() {
    return this.registerDriverForm.get('contact.phone');
  }

  get registerLicenseNo() {
    return this.registerDriverForm.get('license_no');
  }

  confirmRegister(template: TemplateRef<any>) {
    // this will trigger the modal
    this.modalRef = this._modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  register(): void {
    this._adminService
      .registerDriver(this.registerDriverForm.value)
      .subscribe((response) => {
        this.drivers.push(response.driver);
      });
    this.modalRef.hide();
  }
  onDelete(driver: DriverDetails) {
    this._adminService.deleteDriver(driver._id).subscribe(
      (response) => {
        let index = this.drivers.indexOf(driver);
        this.drivers.splice(index, 1); //delete driver from local list
        this.selectedDriver = null; // set the selected driver to null to hide the update/details component
      },
      (error) => {
        console.log(error);
      }
    );
    this.modalRef.hide();
  }

  onSearch() {
    console.log(this.searchText);
    this.driversFilter = this.drivers.filter((driver) => {
      // search driver by license number
      let license = driver.license_no.toLowerCase();
      return license.search(this.searchText.toLowerCase()) != -1;
    });
  }

  fetchDriverScheduleHistory(driver: DriverDetails) {
    this._adminService
      .getDriverSheduleHistory(driver._id)
      .subscribe((response) => {
        this.driverScheduleHistory = response.schedules;
        console.log(this.driverScheduleHistory);
      }),
      (error) => {
        console.log(error);
      };
  }

  onScheduleSelected(schedule) {
    this.selectedSchedule = schedule;
    console.log(this.selectedSchedule);
  }

  clearDeliveies() {
    this.selectedSchedule = null;
  }


  viewOrderDetails(order:Orders){

    const modalRef = this._modalComponentService.open(ViewOrderDetailsComponent,{ size: 'xl' });
    modalRef.componentInstance.order = order;


  }
}
