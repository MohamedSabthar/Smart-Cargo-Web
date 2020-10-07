
import { __assign } from 'tslib';
import { StoreKeeperService } from './../../services/store-keeper.service';
import { DepotDetails } from './../../models/depotDetails';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataTableRowClickEventArgs } from 'ornamentum';

@Component({
  selector: 'app-scheduled-orders-table',
  templateUrl: './scheduled-orders-table.component.html',
  styleUrls: ['./scheduled-orders-table.component.css'],
})
export class ScheduledOrdersTableComponent implements OnInit, OnChanges {
  scheduleDetails: any[];
  @Input() details: any;
  selectedRoute: any;
  depot: DepotDetails;
  constructor(private _storeKeeperService: StoreKeeperService) {}

  ngOnInit(): void {
    this._storeKeeperService.getDeopt().subscribe((depot)=>{
      this.depot = depot;
      console.log('hh')
      console.log(this.depot)
      console.log("hit");
    })
  }

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
      __assign({}, cluster, { status: this.giveDetails(cluster.route) })
    );
    console.log(this.scheduleDetails);
  }

  onRowClick(clickEventArgs: DataTableRowClickEventArgs<any>): void {
      this.selectedRoute=clickEventArgs.row.item.route;
      console.log(this.selectedRoute);
  }
}
