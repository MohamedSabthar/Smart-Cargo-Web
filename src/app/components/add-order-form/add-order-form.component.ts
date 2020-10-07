import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { Orders } from 'src/app/models/orderDetails';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css'],
})
export class AddOrderFormComponent implements OnInit {
  DimentionForm: FormGroup;
  @Input() public orders: Orders;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private _storekeeperService: StoreKeeperService
  ) {}

  //function for closing model
  closeModal(data) {
    this.activeModal.close(data);
  }

  ngOnInit(): void {
    //validation for add order dimention form
    this.DimentionForm = this.fb.group({
      load: [
        '',
        [
          Validators.required,
          Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,4})?$'),
        ],
      ],
      volume: [
        '',
        [
          Validators.required,
          Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,4})?$'),
        ],
      ],
    });
  }

  //getters for form validations
  get load() {
    return this.DimentionForm.get('load');
  }

  get volume() {
    return this.DimentionForm.get('volume');
  }

  updateOrderDimension(): void {
    this._storekeeperService
      .updateDimensions(this.DimentionForm.value, this.orders._id)
      .subscribe(
        (response) => {
          console.log(response);
          this.closeModal({...this.DimentionForm.value, _id:this.orders._id});
        },
        (err) => {
          console.log(err);
        }
      );


  }
}
