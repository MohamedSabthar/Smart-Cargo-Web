import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-statistic-chart',
  templateUrl: './schedule-statistic-chart.component.html',
  styleUrls: ['./schedule-statistic-chart.component.css']
})
export class ScheduleStatisticChartComponent implements OnInit {

  public high: Object[];
  public medium: Object[];
  public low: Object[];
  public all: Object[];

  public xAxis: Object;
  public yAxis: Object;
  public markerSettings: Object;
  public tooltipSettings: Object;
  public legend: Object;
  public zoom: Object;
  public palette: string[];

  constructor() { }

  ngOnInit(): void {

    this.high = [
      {month: 'Jan', sales:35}, {month: 'Feb', sales:28},
      {month: 'Mar', sales:34}, {month: 'Apr', sales:32},
      {month: 'May', sales:40}, {month: 'Jun', sales:35},
      {month: 'Jul', sales:35}, {month: 'Aug', sales:55},
      {month: 'Sep', sales:38}, {month: 'Oct', sales:30},
      {month: 'Nov', sales:25}, {month: 'Dec', sales:32},
    ];

    this.all = [
      {month: 'Jan', sales:100}, {month: 'Feb', sales:128},
      {month: 'Mar', sales:134}, {month: 'Apr', sales:132},
      {month: 'May', sales:140}, {month: 'Jun', sales:135},
      {month: 'Jul', sales:135}, {month: 'Aug', sales:155},
      {month: 'Sep', sales:138}, {month: 'Oct', sales:130},
      {month: 'Nov', sales:125}, {month: 'Dec', sales:132},
    ];

    this.medium = [
      {month: 'Jan', sales:25}, {month: 'Feb', sales:28},
      {month: 'Mar', sales:24}, {month: 'Apr', sales:30},
      {month: 'May', sales:30}, {month: 'Jun', sales:25},
      {month: 'Jul', sales:25}, {month: 'Aug', sales:75},
      {month: 'Sep', sales:68}, {month: 'Oct', sales:20},
      {month: 'Nov', sales:45}, {month: 'Dec', sales:32},
    ];

    this.low = [
      {month: 'Jan', sales:35}, {month: 'Feb', sales:58},
      {month: 'Mar', sales:44}, {month: 'Apr', sales:32},
      {month: 'May', sales:60}, {month: 'Jun', sales:25},
      {month: 'Jul', sales:75}, {month: 'Aug', sales:25},
      {month: 'Sep', sales:18}, {month: 'Oct', sales:70},
      {month: 'Nov', sales:15}, {month: 'Dec', sales:52},
    ];

    this.xAxis ={
      title: 'Date of Scheduled',
      valueType: 'Category'
    }

    this.yAxis ={
      title: 'Number of Orders',
    }

    this.markerSettings = {
      visible: true,
      dataLabel: {
        visible: true
      }
    }

    this.tooltipSettings = {
      enable: true
    }

    this.legend = {
      visible: true
    }

    this.zoom = {
      enableSelectionZooming: true,
      toolbarItems: ['Zoom','ZoomIn','ZoomOut','Reset'],
      enablePan: true,
      enableScrollbar: true,
      enableAutoIntervalOnZooming: true,
      mode : 'X'
    }

    this.palette = ["#E94649", "#F6B53F", "#50C878", "#A13FF6"];
  
  }

}
