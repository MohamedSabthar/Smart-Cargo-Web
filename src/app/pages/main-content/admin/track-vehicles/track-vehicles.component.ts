import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-vehicles',
  templateUrl: './track-vehicles.component.html',
  styleUrls: ['./track-vehicles.component.css']
})
export class TrackVehiclesComponent implements OnInit {
currentDate;
  constructor() { }

  ngOnInit(): void {
    this.currentDate=new Date(); 
  }

}
