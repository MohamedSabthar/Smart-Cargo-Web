import { Component, OnInit } from '@angular/core';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-keeper-management',
  templateUrl: './store-keeper-management.component.html',
  styleUrls: ['./store-keeper-management.component.css'],
  providers: [NgbNavConfig]
})
export class StoreKeeperManagementComponent implements OnInit {

  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
  }

}
