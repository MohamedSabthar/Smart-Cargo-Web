import { ScheduleDetails } from './../../../../models/scheduleDetails';
import { ScheduleOrderOrderListComponent } from './../../../../components/schedule-order-order-list/schedule-order-order-list.component';
import { ScheduleOrderAssignVehicleComponent } from './../../../../components/schedule-order-assign-vehicle/schedule-order-assign-vehicle.component';
import { ScheduleOrderAssignDriverComponent } from './../../../../components/schedule-order-assign-driver/schedule-order-assign-driver.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';

@Component({
  selector: 'app-schedule-orders',
  templateUrl: './schedule-orders.component.html',
  styleUrls: ['./schedule-orders.component.css'],
})
export class ScheduleOrdersComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private _storeKeeperService: StoreKeeperService
  ) {}

  scheduleDetails: any[];

  openAssignDriverModal() {
    const modalRef = this.modalService.open(ScheduleOrderAssignDriverComponent);

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openAssignVehicleModal() {
    const modalRef = this.modalService.open(
      ScheduleOrderAssignVehicleComponent
    );

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openOrderListModal() {
    const modalRef = this.modalService.open(ScheduleOrderOrderListComponent);

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this._storeKeeperService.getScheduledOrders().subscribe(
      (response) => {
        this.scheduleDetails = response;
        console.log(this.scheduleDetails);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
