import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent implements OnInit {

  DimentionForm: FormGroup;
  constructor(public activeModal: NgbActiveModal ,private fb: FormBuilder) { }

  //function for closing model
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {

    //validation for add order dimention form
    this.DimentionForm = this.fb.group({
      Weight:  ['', [
        Validators.required,
        Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,4})?$"),
      ],],
      Volume:  ['', [
        Validators.required,
        Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,4})?$"),
      ],],
    });

  }

//getters for form validations
  get Weight() {
    return this.DimentionForm.get('Weight')
  }

  get Volume() {
    return this.DimentionForm.get('Volume')
  }

}
