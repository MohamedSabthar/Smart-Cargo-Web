import { Component, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Schedule } from 'src/app/models/schedule.response';
import { AdminService } from './../../services/admin.service';
import { ScheduleDetails } from './../../models/scheduleDetails';
import { __assign } from 'tslib';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit,OnChanges {

  @Input() public schedules: ScheduleDetails[];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.schedules!=null)
    this.schedules = this.schedules.map((cluster) =>
    __assign({}, cluster, { status: this.giveDetails(cluster.route) }));
    console.log(this.schedules)
  }
  
  ngOnInit(): void {
   
  
  }

  giveDetails(route): string {
    if (route == null || route.length == 0) return 'clustered';
    return 'scheduled';
  }
  
}
