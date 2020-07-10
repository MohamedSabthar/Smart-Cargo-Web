import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-order-order-list',
  templateUrl: './schedule-order-order-list.component.html',
  styleUrls: ['./schedule-order-order-list.component.css']
})
export class ScheduleOrderOrderListComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
  }

}
