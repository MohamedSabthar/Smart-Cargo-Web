import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrackVehileMapComponent } from 'src/app/components/track-vehile-map/track-vehile-map.component';
import { TrackVehileDetailsComponent } from 'src/app/components/track-vehile-details/track-vehile-details.component';
import { TimeLineComponent } from 'src/app/components/time-line/time-line.component';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {
  currentDate;
  constructor(private modalService: NgbModal) { }

  openMapModal() {
    const modalRef = this.modalService.open(TrackVehileMapComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openDetailsModal() {
    const modalRef = this.modalService.open(TrackVehileDetailsComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openStatusModal() {
    const modalRef = this.modalService.open(TimeLineComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


  ngOnInit(): void {
    this.currentDate=new Date(); 
  }

}
