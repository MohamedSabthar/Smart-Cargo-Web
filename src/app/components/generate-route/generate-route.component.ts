import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generate-route',
  templateUrl: './generate-route.component.html',
  styleUrls: ['./generate-route.component.css'],
})
export class GenerateRouteComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() public clusterId: string;
  route: any;
  loading:string = '';

  constructor(
    private _storekeeperService: StoreKeeperService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  decline(): void {
    this.modalRef.hide();
  }

  //function for closing model
  closeModal(data) {
    this.activeModal.close(data);
  }

  generateRoute(): void {
    this.loading = 'We are processing your request';
    this._storekeeperService.generateRoute({ id: this.clusterId }).subscribe(
      (response) => {
        this.closeModal({
          status: 'sheduled',
        });
        this.loading = '';
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
