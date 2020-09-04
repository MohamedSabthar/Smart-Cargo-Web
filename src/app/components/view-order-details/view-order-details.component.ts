import { Orders } from './../../models/orderDetails';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var ol: any;

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css'],
})
export class ViewOrderDetailsComponent implements OnInit {
  @Input() public order: Orders;


  constructor(private _activeModal: NgbActiveModal) {}

  latitude: Number
  longitude: Number

  map: any;

  ngOnInit(): void {

    this.latitude = this.order.location.lat;
    this.longitude = this.order.location.lang;

    var attribution = new ol.control.Attribution({
      collapsible: false,
    });

    console.log(this.order.location)
    //add map
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([ this.longitude,this.latitude]),
        zoom: 16
      })
    });

    //add marker
    var layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(
              ol.proj.fromLonLat([this.longitude,this.latitude])
            ),
            color: 'red',
          }),
        ],
      }),
    });

    this.map.addLayer(layer);
  }

  closeModal() {
    this._activeModal.close('close');
  }

  getEmergencyLevel(): string {
    switch (this.order.emergency_level) {
      case 1:
        return 'High';
      case 2:
        return 'Medium';
      case 3:
        return 'Low';
    }
  }
}
