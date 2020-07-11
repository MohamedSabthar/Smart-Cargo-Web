import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './../../../../services/admin.service';
import { Storekeepers } from './../../../../models/storekeeper.response';
import { StorekeeperDetails } from './../../../../models/storekeeperDetails';
import * as Feather from 'feather-icons';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-store-keeper-management',
  templateUrl: './store-keeper-management.component.html',
  styleUrls: ['./store-keeper-management.component.css'],
  providers: [NgbNavConfig]
})
export class StoreKeeperManagementComponent implements OnInit {

  constructor(config: NgbNavConfig,private _adminServices:AdminService, private _fb:FormBuilder) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }

  storekeepers:StorekeeperDetails[]
  selectedStorekeeper:StorekeeperDetails=null;

  updateStorekeeperForm = this._fb.group({
    name: this._fb.group({
      first: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
      middle: ['',[Validators.pattern('[a-zA-Z]*')]] ,
      last: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
    }),
    address: this._fb.group({
      no: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,
      street: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,
      city: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    }),
    contact: this._fb.group({
      email:  ['',[Validators.required,Validators.email]] ,
      phone:  ['',[Validators.required,Validators.pattern(/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/)]] ,
    })
  });

  isLoading = false; //variable display/hide loader

  ngOnInit(): void {
    this._adminServices.getListOfStorekeepers().subscribe((response:Storekeepers)=>{
      this.storekeepers=response.storekeepers;
    },(error)=>{console.log(error)})
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }

  onStorekeeperSelected(storekeeper : StorekeeperDetails){
    this.selectedStorekeeper=storekeeper;
  }
}

