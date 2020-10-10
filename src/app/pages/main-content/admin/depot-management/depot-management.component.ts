import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-depot-management',
  templateUrl: './depot-management.component.html',
  styleUrls: ['./depot-management.component.css']
})
export class DepotManagementComponent implements OnInit {

  map;
  constructor(private _fb:FormBuilder) { }

  mangaeDepot = this._fb.group({
    address: this._fb.control('',[Validators.required])
  });

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
