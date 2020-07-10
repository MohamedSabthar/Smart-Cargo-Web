import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-schedule-order-assign-driver',
  templateUrl: './schedule-order-assign-driver.component.html',
  styleUrls: ['./schedule-order-assign-driver.component.css']
})
export class ScheduleOrderAssignDriverComponent implements OnInit {

  DriverForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
    this.DriverForm = this.fb.group({
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
    return this.DriverForm.get('Type')
  }

  get Id() {
    return this.DriverForm.get('Id')
  }

}