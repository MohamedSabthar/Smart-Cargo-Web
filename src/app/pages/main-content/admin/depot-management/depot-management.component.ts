import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot-management',
  templateUrl: './depot-management.component.html',
  styleUrls: ['./depot-management.component.css']
})
export class DepotManagementComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  mangaeDepot = this._fb.group({
    address: this._fb.control('',[Validators.required])
  });

  ngOnInit(): void {
  }

}
