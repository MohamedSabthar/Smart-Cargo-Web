import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {
  currentDate;
  constructor() { }

  ngOnInit(): void {
    this.currentDate=new Date(); 
  }

}
