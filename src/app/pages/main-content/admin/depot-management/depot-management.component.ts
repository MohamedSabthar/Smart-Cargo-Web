import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
//import file from 'ol/layer/file';
import OSM from 'ol/source/OSM';
import View from 'ol/View';

@Component({
  selector: 'app-depot-management',
  templateUrl: './depot-management.component.html',
  styleUrls: ['./depot-management.component.css']
})
export class DepotManagementComponent implements OnInit {

  map;
  constructor() { }

  ngOnInit(): void {
    //this.initilizeMap();
  }

  // initilizeMap() {

  //   this.map = new Map({
  //     target : 'map',
  //     layers : [
  //       new file({
  //         source: new OSM()
  //       })
  //     ],
  //     view: new View({
  //       center: [37.41,8.82],
  //       zoom: 4
  //     })
  //   });
  // }
}
