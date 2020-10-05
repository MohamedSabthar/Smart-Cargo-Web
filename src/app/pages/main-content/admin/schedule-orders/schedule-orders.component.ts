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

  test = {
    _id: { $oid: '5edfb29a4581798d78e4f77a' },
    location: { lat: 6.8786, lang: 79.92163 },
    products: [
      {
        _id: { $oid: '5edfb29a4581798d78e4f77b' },
        item: '#79079',
        quantity: 25,
      },
      {
        _id: { $oid: '5edfb29a4581798d78e4f77c' },
        item: '#79079',
        quantity: 25,
      },
      {
        _id: { $oid: '5edfb29a4581798d78e4f77d' },
        item: '#79079',
        quantity: 25,
      },
      {
        _id: { $oid: '5edfb29a4581798d78e4f77e' },
        item: '#79079',
        quantity: 25,
      },
    ],
    email: 'test@yopmail.com',
    phone: '+94773398956',
    status: 'ready',
    emergency_level: 1,
    volume: 1,
    load: 20,
    __v: 0,
  };

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
