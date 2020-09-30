import { __assign } from 'tslib';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Orders } from './../../models/orderDetails';
import { Component, OnInit, Input } from '@angular/core';
import { DataTableRowClickEventArgs } from 'ornamentum';
import { ViewOrderDetailsComponent } from '../view-order-details/view-order-details.component';

@Component({
  selector: 'app-delivery-history-expanded',
  templateUrl: './delivery-history-expanded.component.html',
  styleUrls: ['./delivery-history-expanded.component.css'],
})
export class DeliveryHistoryExpandedComponent implements OnInit {
  constructor(private _modalComponentService: NgbModal) {}

  @Input() row: any;
  orders: Orders[];

  ngOnInit(): void {
    this.orders = this.row.item.orders.map((order) =>
      __assign({}, order, {
        emergency_level: this.getEmergencyLevel(order.emergency_level), //formating emergancy level from number value to string
      })
    );
    console.log(this.orders);
  }

  //triger modal on row clicked
  public onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
    const modalRef = this._modalComponentService.open(
      ViewOrderDetailsComponent,
      { size: 'xl' }
    );
    modalRef.componentInstance.order = clickEventArgs.row.item; //send order details to modal
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
