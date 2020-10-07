import { Orders } from './../../models/orderDetails';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableRowClickEventArgs } from 'ornamentum';
import { newOrderDetails } from 'src/app/models/newOrderDetails';
import { NewOrders } from 'src/app/models/newOrders.response';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { AddOrderFormComponent } from '../add-order-form/add-order-form.component';

@Component({
  selector: 'app-order-dimension-table',
  templateUrl: './order-dimension-table.component.html',
  styleUrls: ['./order-dimension-table.component.css'],
})
export class OrderDimensionTableComponent implements OnInit {
  newOrders: newOrderDetails[];

  constructor(
    private _storekeeperServices: StoreKeeperService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
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

  // Order dimention form
  openFormModal(clickEventArgs: DataTableRowClickEventArgs<any>) {
    const modalRef = this.modalService.open(AddOrderFormComponent);
    modalRef.componentInstance.orders = clickEventArgs.row.item;

    // modalRef.result
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
}
