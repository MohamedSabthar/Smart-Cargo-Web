import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cluster-loader',
  templateUrl: './cluster-loader.component.html',
  styleUrls: ['./cluster-loader.component.css']
})
export class ClusterLoaderComponent implements OnInit {
  // @Input() public showLoader: boolean;
  constructor(public activeModal: NgbActiveModal) { }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit(): void {
  }

}
