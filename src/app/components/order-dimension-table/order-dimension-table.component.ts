import { __assign } from 'tslib';
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
    this._storekeeperServices.getNewOrders().subscribe(
      (response: NewOrders) => {
        console.log(response);
        this.newOrders = response.orders.map((order) =>
          __assign({}, order, {
            emergency_level: this.getEmergencyLevel(order.emergency_level), //formating emergancy level from number value to string
          })
        );
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
    modalRef.result.then((res)=>{
      // updating the local fields in the table
      let index = this.newOrders.findIndex((e)=>e._id==res._id);
      this.newOrders[index].load = res.load;
      this.newOrders[index].volume = res.volume;
      this.newOrders[index].status="ready";

    })
  }

  getEmergencyLevel(emergency_level): string {
    switch (emergency_level) {
      case 1:
        return 'High';
      case 2:
        return 'Medium';
      case 3:
        return 'Low';
    }
  }
}
