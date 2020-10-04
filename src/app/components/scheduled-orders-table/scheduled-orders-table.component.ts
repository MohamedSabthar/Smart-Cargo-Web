import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-orders-table',
  templateUrl: './scheduled-orders-table.component.html',
  styleUrls: ['./scheduled-orders-table.component.css'],
})
export class ScheduledOrdersTableComponent implements OnInit {
  public data: any[];

  constructor() {
    this.data = [
      {
        route: '45896',
        vehicleType: 'Dimo Batta',
        vehicleID: '5874',
        driverID: '48756',
        status: 'pending',
      },
    ];
  }

  ngOnInit(): void {}
}
