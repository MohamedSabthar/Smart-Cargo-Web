import { __assign } from 'tslib';
import { ScheduleDetails } from './../../models/scheduleDetails';
import { Component, OnInit, Input } from '@angular/core';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { ViewOrderDetailsComponent } from '../view-order-details/view-order-details.component';

@Component({
  selector: 'app-schedule-orders-expanded',
  templateUrl: './schedule-orders-expanded.component.html',
  styleUrls: ['./schedule-orders-expanded.component.css'],
})
export class ScheduleOrdersExpandedComponent implements OnInit {
  @Input() row: any;
  scheduleDetails: any[];

  constructor(private _storeKeeperService: StoreKeeperService) {}

  ngOnInit(): void {
    console.log('sss');
    this.scheduleDetails = this.row.item.orders.map((order) =>
      __assign({}, order, {
        emergency_level: this.getEmergencyLevel(order.emergency_level),
      })
    );
    console.log(this.row.item);
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
