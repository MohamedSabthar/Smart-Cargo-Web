import { Component, OnInit, TemplateRef } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './../../../../services/admin.service';
import { Storekeepers } from './../../../../models/storekeeper.response';
import { StorekeeperDetails } from './../../../../models/storekeeperDetails';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { __assign } from 'tslib';


@Component({
  selector: 'app-store-keeper-management',
  templateUrl: './store-keeper-management.component.html',
  styleUrls: ['./store-keeper-management.component.css'],
  providers: [NgbNavConfig]
})
export class StoreKeeperManagementComponent implements OnInit {

  constructor(config: NgbNavConfig,private _adminServices:AdminService, private _fb:FormBuilder, private _modalService: BsModalService) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
    
  }

  modalRef: BsModalRef;
  storekeepers:StorekeeperDetails[]
  selectedStorekeeper:StorekeeperDetails=null
  searchText:string
  storekeepersFilter:StorekeeperDetails[];
  storekeeperUdpateMessage:string



  updateStorekeeperForm = this._fb.group({
    name: this._fb.group({
      first: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
      middle: ['',[Validators.pattern('[a-zA-Z]*')]] ,
      last: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
    }),
    address: this._fb.group({
      no: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/ ]*')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/, ]*')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]* ?[0-9]*')]],
    }),
    contact: this._fb.group({
      email:  ['',[Validators.required,Validators.email]] ,
      phone:  ['',[Validators.required,Validators.pattern(/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/)]] ,
    }),
    role: ['store-keeper', [Validators.required]], //role feild is hidden in the form
  });

  registerStorekeeperForm = this._fb.group({
    name: this._fb.group({
      first: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
      middle: ['',[Validators.pattern('[a-zA-Z]*')]] ,
      last: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
    }),
    address: this._fb.group({
      no: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/ ]*')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/, ]*')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z]* ?[0-9]*')]],
    }),
    contact: this._fb.group({
      email:  ['',[Validators.required,Validators.email]] ,
      phone:  ['',[Validators.required,Validators.pattern(/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/)]] ,
    }),
    role: ['store-keeper', [Validators.required]], //role feild is hidden in the form
  });

  isLoading = false; //variable display/hide loader

  ngOnInit(): void {
    this._adminServices.getListOfStorekeepers().subscribe((response:Storekeepers)=>{
      this.storekeepers=response.storekeepers;
      console.log(response)
    },(error)=>{console.log(error)})
  }



  onSearch() {
    console.log(this.searchText);
    this.storekeepersFilter = this.storekeepers.filter((storekeeper) => {
      let name: String = storekeeper._id;
      return name.search(this.searchText.toLowerCase()) != -1;
    });
  }

  onDelete(storekeeper: StorekeeperDetails) {
    this._adminServices.deleteStorekeeper(storekeeper._id).subscribe(
      (response) => {
        let index = this.storekeepers.indexOf(storekeeper);
        this.storekeepers.splice(index, 1); //delete storekeeper from local list
        this.selectedStorekeeper = null; // set the selected storekeeper to null to hide the update/details component
      },
      (error) => {
        console.log(error);
      }
    );
    this.modalRef.hide();
  }

  confirmDelete(template: TemplateRef<any>,storekeeper:StorekeeperDetails) {
    this.selectedStorekeeper = storekeeper
    // this will trigger the modal

    this.modalRef = this._modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }
  // triggers when No button cliked in confirmation modal
  decline(): void {
    // reset the data in update form if declined
    // this.updateFormReset();
    this.modalRef.hide();
  }

    // populate the update form details, when a storekeeper element clicked from list
  onStorekeeperSeletected(storekeeper: StorekeeperDetails) {
    console.log("hit")
    this.selectedStorekeeper = storekeeper;
    this.setUpdateFormData(storekeeper);
    this.disableUpdateButton();
    //this.clearDeliveies();
    //this.fetchStorekeeperScheduleHistory(storekeeper);
  }

  // Reset the form fields value to previous value
  updateFormReset() {
    this.setUpdateFormData(this.selectedStorekeeper);
  }

  // triggers the update confirmation modal
  confirmUpdate(template: TemplateRef<any>) {
    // this will trigger the modal
    this.modalRef = this._modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  //populate the form feilds with givern details
  setUpdateFormData(storekeeper: StorekeeperDetails) {
    this.updateStorekeeperForm.patchValue({ ...storekeeper, role: 'store-keeper' });
  }

  //disable the update(save) button until touched
  disableUpdateButton() {
    this.updateStorekeeperForm.markAsPristine();
  }

  // clearDeliveies() {
  //   this.selectedSchedule = null;
  // }

  get registerFirstName() {
    return this.registerStorekeeperForm.get('name.first');
  }

  get registerMiddleName() {
    return this.registerStorekeeperForm.get('name.middle');
  }

  get registerLastName() {
    return this.registerStorekeeperForm.get('name.last');
  }

  get registerNo() {
    return this.registerStorekeeperForm.get('address.no');
  }

  get registerStreet() {
    return this.registerStorekeeperForm.get('address.street');
  }

  get registerCity() {
    return this.registerStorekeeperForm.get('address.city');
  }

  get registerEmail() {
    return this.registerStorekeeperForm.get('contact.email');
  }

  get registerPhone() {
    return this.registerStorekeeperForm.get('contact.phone');
  }




  get updateFirstName() {
    return this.updateStorekeeperForm.get('name.first');
  }

  get updateMiddleName() {
    return this.updateStorekeeperForm.get('name.middle');
  }

  get updateLastName() {
    return this.updateStorekeeperForm.get('name.last');
  }

  get updateNo() {
    return this.updateStorekeeperForm.get('address.no');
  }

  get updateStreet() {
    return this.updateStorekeeperForm.get('address.street');
  }

  get updateCity() {
    return this.updateStorekeeperForm.get('address.city');
  }

  get updateEmail() {
    return this.updateStorekeeperForm.get('contact.email');
  }

  get updatePhone() {
    return this.updateStorekeeperForm.get('contact.phone');
  }


  // triggers when Yer button cliked in confirmation modal
  confirm(): void {
    console.log(this.updateStorekeeperForm.value);
    this._adminServices
      .updateStorekeeperDetails(this.updateStorekeeperForm.value, this.selectedStorekeeper._id)
      .subscribe(
        (response) => {
          //change the storekeeper details in the current list after successful update
          const index = this.storekeepers.indexOf(this.selectedStorekeeper);

          this.selectedStorekeeper = __assign(
            {},
            this.selectedStorekeeper,
            this.updateStorekeeperForm.value
          );
          this.storekeepers[index] = this.selectedStorekeeper;
          console.log(this.storekeepers);
          this.disableUpdateButton();
          //display the success alert
          this.storekeeperUdpateMessage = response.message;
        },
        (error) => {
          console.log(error);
        }
      );
    this.modalRef.hide();
  }
  register(): void {
    this._adminServices
      .registerStorekeeper(this.registerStorekeeperForm.value)
      .subscribe((response) => {
        this.storekeepers.push(response.storekeeper);
      });
    this.modalRef.hide();
  }

  confirmRegister(template: TemplateRef<any>) {
    // this will trigger the modal
    this.modalRef = this._modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  // closses the update-successful alert message
  closeUpdateAlert() {
    this.storekeeperUdpateMessage = null;
  }


}


