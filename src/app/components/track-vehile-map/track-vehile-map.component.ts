import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var ol: any;

@Component({
  selector: 'app-track-vehile-map',
  templateUrl: './track-vehile-map.component.html',
  styleUrls: ['./track-vehile-map.component.css']
})

export class TrackVehileMapComponent implements OnInit {
  
   latitude: number =  6.928659;
  longitude: number = 79.861626;

  map: any;

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  ngOnInit(): void {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([ 79.861626,6.928659]),
        zoom: 12
      })
    });
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }



}
