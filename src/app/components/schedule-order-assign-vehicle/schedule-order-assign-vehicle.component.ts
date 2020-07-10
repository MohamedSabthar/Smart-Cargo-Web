import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-schedule-order-assign-vehicle',
  templateUrl: './schedule-order-assign-vehicle.component.html',
  styleUrls: ['./schedule-order-assign-vehicle.component.css']
})
export class ScheduleOrderAssignVehicleComponent implements OnInit {

  VehicleForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit(): void {
    this.VehicleForm = this.fb.group({
      Type:  ['', [
        Validators.required,
       
      ],],
      Id:  ['', [
        Validators.required,
      ],],
    });

  }

//getters for form validations
  get Type() {
    return this.VehicleForm.get('Type')
  }

  get Id() {
    return this.VehicleForm.get('Id')
  }

}