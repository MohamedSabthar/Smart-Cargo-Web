import { NewOrders } from './../../../../models/newOrders.response';
import { newOrderDetails } from './../../../../models/newOrderDetails';
import { StoreKeeperService } from './../../../../services/store-keeper.service';
import { AddOrderDetailsComponent } from './../../../../components/add-order-details/add-order-details.component';
import { AddOrderFormComponent } from './../../../../components/add-order-form/add-order-form.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-order-dimention',
  templateUrl: './add-order-dimention.component.html',
  styleUrls: ['./add-order-dimention.component.css'],
})
export class AddOrderDimentionComponent implements OnInit {
  date;
  constructor(
    private modalService: NgbModal,
    private _storekeeperServices: StoreKeeperService
  ) {}

  newOrders: newOrderDetails[];

  // Order dimention form
  openFormModal() {
    const modalRef = this.modalService.open(AddOrderFormComponent);

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //customer details model
  openDetailsModel() {
    const modalRef = this.modalService.open(AddOrderDetailsComponent);

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    //initializing a date
    this.date = new Date();
    this._storekeeperServices.getNewOrders().subscribe(
      (response: NewOrders) => {
        console.log(response);
        this.newOrders = response.orders;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
