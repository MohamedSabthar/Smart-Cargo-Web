import { FormGroup } from '@angular/forms';
import { Drivers } from './../../models/drivers.response';
import { DriverDetails } from './../../models/driverDetails';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DepotDetails } from 'src/app/models/depotDetails';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { Orders } from './../../models/orderDetails';

declare let ol: any;
@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.component.html',
  styleUrls: ['./view-route.component.css'],
})
export class ViewRouteComponent implements OnInit, OnChanges {
  constructor(
    public activeModal: NgbActiveModal,
    private _storekeeperServices: StoreKeeperService
  ) {}

  public ngOnChanges(): void {
    if (this.orders != null && this.depotDetails != null) {
      console.log('hitttter');
      this.loadMap();
    }
  }

  @Input() public orders: Orders[];
  @Input('depot') public depotDetails: DepotDetails;
  layer: any = null;
  linie2: any = null;
  map: any;
  availableDrivers: DriverDetails[];
  @Input() public drivers: DriverDetails;
  AssignDriverForm: FormGroup;
  selectedDriver: DriverDetails;

  ngOnInit(): void {
    //add map
    this.map = new ol.Map({
      target: 'route',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([80.723869, 7.449624]),
        zoom: 8,
      }),
    });

    this.loadMap();

    this._storekeeperServices.getAvailableDrivers().subscribe(
      (response: Drivers) => {
        console.log('hit');
        this.availableDrivers = response.drivers;
        console.log(this.availableDrivers);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadMap() {
    this.map.removeLayer(this.linie2); //remove old line vector layer
    this.map.removeLayer(this.layer); //remove old marker layer

    //array to store the markers
    let markers = [];

    let depotMarker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([
          this.depotDetails.depot.location.lang,
          this.depotDetails.depot.location.lat,
        ])
      ),
      color: 'red',
    });

    //use different color for depot marker
    depotMarker.setStyle(
      new ol.style.Style({
        image: new ol.style.Icon({
          color: '#4d5c84',
          crossOrigin: 'anonymous',
          src: 'assets/img/dot.png',
        }),
      })
    );
    markers.push(depotMarker);

    //temporary array to store lat,long openlayer objects
    let locations = [];

    for (let order of this.orders) {
      //create marker for each order
      let marker = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([order.location.lang, order.location.lat])
        ),
        color: 'red',
      });

      //set marker style
      marker.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            color: '#FF6961',
            crossOrigin: 'anonymous',
            src: 'assets/img/dot.png',
          }),
        })
      );

      //temporarly store location
      locations.unshift(
        ol.proj.fromLonLat([order.location.lang, order.location.lat])
      );

      //store marker in the array
      markers.push(marker);
    }

    // store the depot location as first element
    locations.unshift(
      ol.proj.fromLonLat([
        this.depotDetails.depot.location.lang,
        this.depotDetails.depot.location.lat,
      ])
    );

    //add marker to the layer vector
    this.layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: markers,
      }),
    });

    // route/line style
    let lineStyle = [
      new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#d12710',
          width: 2,
        }),
      }),
    ];

    let lines = [];
    //draw line between locations
    for (let i = 0; i < locations.length - 1; i++) {
      let line = new ol.Feature({
        geometry: new ol.geom.LineString([locations[i], locations[i + 1]]),
        name: 'Line',
      });
      //store the lines temporarly
      lines.push(line);
    }

    //connect the last delivery location and depot
    lines.push(
      new ol.Feature({
        geometry: new ol.geom.LineString([
          locations[locations.length - 1],
          locations[0],
        ]),
        name: 'Line',
      })
    );

    //create layer vector of lines
    this.linie2 = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: lines,
      }),
    });

    //set layer vector style
    this.linie2.setStyle(lineStyle);
    this.map.addLayer(this.linie2); //add line vector layer
    this.map.addLayer(this.layer); //add marker layer
  }

  //function for closing model
  closeModal(data) {
    this.activeModal.close(data);
  }

  assignDriver(): void {
    if (this.selectedDriver != null)
      this._storekeeperServices
        .assignDriver({ _id: this.selectedDriver._id })
        .subscribe(
          (response) => {
            this.closeModal({ _id: this.selectedDriver._id });
          },
          (err) => {
            console.log(err);
          }
        );
  }
}
