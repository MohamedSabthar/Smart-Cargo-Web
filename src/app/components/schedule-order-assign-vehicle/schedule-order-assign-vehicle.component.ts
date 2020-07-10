import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-order-assign-vehicle',
  templateUrl: './schedule-order-assign-vehicle.component.html',
  styleUrls: ['./schedule-order-assign-vehicle.component.css']
})
export class ScheduleOrderAssignVehicleComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit(): void {
  }

}
