import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-order-details',
  templateUrl: './add-order-details.component.html',
  styleUrls: ['./add-order-details.component.css']
})
export class AddOrderDetailsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
  }

}
