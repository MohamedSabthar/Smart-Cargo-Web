import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-order-assign-driver',
  templateUrl: './schedule-order-assign-driver.component.html',
  styleUrls: ['./schedule-order-assign-driver.component.css']
})
export class ScheduleOrderAssignDriverComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
  }

}
