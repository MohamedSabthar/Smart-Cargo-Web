import { Orders } from './../../models/orderDetails';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {

  @Input() public order:Orders;
  mapLocation:string;

  constructor(private _activeModal: NgbActiveModal,private _sanitizer:DomSanitizer) {

  }


  ngOnInit(): void {
    console.log(this.order)
    this.mapLocation = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDQMuWTo1cJ8s3pm0ZbbOi65jB8E4-LJVE&q="+this.order.location.lat+','+this.order.location.lang;
  }

  closeModal() {
    this._activeModal.close('close');
  }

   getEmergencyLevel():string{
    switch(this.order.emergency_level){
      case 1: return "High"
      case 2: return "Medium"
      case 3: return "Low"
    }
  }

  getLocationOnMap(){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.mapLocation);
  }

}
