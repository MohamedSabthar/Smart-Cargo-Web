import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-track-vehile-details',
  templateUrl: './track-vehile-details.component.html',
  styleUrls: ['./track-vehile-details.component.css']
})
export class TrackVehileDetailsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  ngOnInit(): void {
  }

}
