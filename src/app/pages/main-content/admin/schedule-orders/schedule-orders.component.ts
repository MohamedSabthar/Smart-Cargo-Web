import { ScheduleOrderOrderListComponent } from './../../../../components/schedule-order-order-list/schedule-order-order-list.component';
import { ScheduleOrderAssignVehicleComponent } from './../../../../components/schedule-order-assign-vehicle/schedule-order-assign-vehicle.component';
import { ScheduleOrderAssignDriverComponent } from './../../../../components/schedule-order-assign-driver/schedule-order-assign-driver.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-orders',
  templateUrl: './schedule-orders.component.html',
  styleUrls: ['./schedule-orders.component.css']
})
export class ScheduleOrdersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  
    openAssignDriverModal() {
      const modalRef = this.modalService.open(ScheduleOrderAssignDriverComponent);
      
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  }
  
  openAssignVehicleModal() {
    const modalRef = this.modalService.open(ScheduleOrderAssignVehicleComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


  openOrderListModal() {
    const modalRef = this.modalService.open(ScheduleOrderOrderListComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
