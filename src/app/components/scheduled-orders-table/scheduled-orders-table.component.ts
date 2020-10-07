import { ViewRouteComponent } from './../view-route/view-route.component';

import { __assign } from 'tslib';
import { StoreKeeperService } from './../../services/store-keeper.service';
import { DepotDetails } from './../../models/depotDetails';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  TemplateRef,
} from '@angular/core';
import { DataTableRowClickEventArgs } from 'ornamentum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  modalRef: BsModalRef;

  constructor(
    private _storeKeeperService: StoreKeeperService,
    private _modalComponentService: NgbModal
  ) {}

  ngOnInit(): void {
    this._storeKeeperService.getDeopt().subscribe((depot) => {
      this.depot = depot;
      console.log('hh');
      console.log(this.depot);
      console.log('hit');
    });
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
    this.selectedRoute = clickEventArgs.row.item.route;
    const modalRef = this._modalComponentService.open(ViewRouteComponent, {
      size: 'xl lg md sm',
    });
    modalRef.componentInstance.orders = this.selectedRoute;
    modalRef.componentInstance.depotDetails = this.depot;
  }
}
