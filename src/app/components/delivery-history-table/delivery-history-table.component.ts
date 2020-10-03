import { ScheduleDetails } from './../../models/scheduleDetails';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-history-table',
  templateUrl: './delivery-history-table.component.html',
  styleUrls: ['./delivery-history-table.component.css']
})
export class DeliveryHistoryTableComponent implements OnInit {

  constructor() { }
@Input() history:ScheduleDetails[];

  ngOnInit(): void {

  }


}
