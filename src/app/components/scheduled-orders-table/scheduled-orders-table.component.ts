import { Schedule } from './../../models/schedule.response';
import { __assign } from 'tslib';
import { Routes } from '@angular/router';
import { StoreKeeperService } from './../../services/store-keeper.service';
import { ScheduleDetails } from './../../models/scheduleDetails';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-scheduled-orders-table',
  templateUrl: './scheduled-orders-table.component.html',
  styleUrls: ['./scheduled-orders-table.component.css'],
})
export class ScheduledOrdersTableComponent implements OnInit, OnChanges {
  scheduleDetails: any[];
  @Input() details: any;
  constructor(private _storeKeeperService: StoreKeeperService) {}

  ngOnInit(): void {}

  orderStatus() {
    console.log('faiz');
  }

  giveDetails(route): string {
    if (route == null || route.length == 0) return 'clustered';
    return 'scheduled';
  }

  ngOnChanges() {
    console.log('input changed');
    this.scheduleDetails = this.details?.schedules.map((cluster) =>
      __assign({}, cluster, { route: this.giveDetails(cluster.route) })
    );
    console.log(this.scheduleDetails);
  }
}
