import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Map } from 'ol/Map';
import { AdminService } from './../../../../services/admin.service';
import { DepotDetails } from 'src/app/models/depotDetails';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

declare var ol: any;
declare var OpenLayers: any;

@Component({
  selector: 'app-depot-management',
  templateUrl: './depot-management.component.html',
  styleUrls: ['./depot-management.component.css'],
})
export class DepotManagementComponent implements OnInit {
  constructor(private _fb: FormBuilder, private adminService: AdminService, private _modalService: BsModalService) {}

  latitude: number = 6.928659;
  longitude: number = 79.861626;

  lat: number;
  lng: number;
  depotId: string;
  buttonN : string;
  userMessage : String;
  userMapMessage : String;
  layer : any;
  modalRef: BsModalRef;

  map: any;

  manageDepot = this._fb.group({
    address: this._fb.control('', [Validators.required]),
  });

  ngOnInit(): void {
    this.initilizeMap();
    this.initializeDepotDetails();
  }

  initializeDepotDetails() {
    this.adminService.getDepotDetails().subscribe((res) => {
      const [depotDetails] = res;
      if (depotDetails) {
        const { address, location, _id } = depotDetails;
        this.manageDepot.patchValue({
          address,
        });
        const { lat, lang } = location;
        this.lat = lat;
        this.lng = lang;
        this.depotId = _id;

        //marker condition in get function 
        let marker = new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([this.lng , this.lat])
          ),
          color: 'red',
        });
        if(this.layer != null){
          this.map.removeLayer(this.layer);
        }
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
    
        //add marker to vector layer
         this.layer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
             marker
            ],
          }),
        });
        this.map.addLayer(this.layer);
        
      }
    });
  }

  initilizeMap() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([79.861626, 6.928659]),
        zoom: 12,
      }),
    });

    this.map.on('singleclick', (evt) => {
      console.log(evt.coordinate);
      // convert coordinate to EPSG-4326
      const [lng, lat] = ol.proj.transform(
        evt.coordinate,
        'EPSG:3857',
        'EPSG:4326'
      );
      console.log('lat: ', lat);
      console.log('lng: ', lng);
      this.lat = lat;
      this.lng = lng;

      let marker = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([this.lng , this.lat])
        ),
        color: 'red',
      });
      
      if(this.layer != null){
        this.map.removeLayer(this.layer);
      }
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
  
      //add marker to vector layer
       this.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
           marker
          ],
        }),
      });
      console.log('Hit1')
      this.map.addLayer(this.layer);
    });
  }
  
  confirmRegister(template: TemplateRef<any>) {
    // this will trigger the modal
    this.modalRef = this._modalService.show(template, {
      class: 'modal-md modal-dialog-centered',
    });
  }

  // triggers when No button cliked in confirmation modal
  decline(): void {
    // reset the data in update form if declined
    this.adminService.getDepotDetails().subscribe((res) => {
      const [depotDetails] = res;
      if (depotDetails) {
        const { address, location, _id } = depotDetails;
        this.manageDepot.patchValue({
          address,
        });
        const { lat, lang } = location;
        this.lat = lat;
        this.lng = lang;
        this.depotId = _id;

        //marker condition in get function 
        let marker = new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([this.lng , this.lat])
          ),
          color: 'red',
        });
        if(this.layer != null){
          this.map.removeLayer(this.layer);
        }
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
    
        //add marker to vector layer
         this.layer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
             marker
            ],
          }),
        });
        this.map.addLayer(this.layer);
        
      }
    });
    this.modalRef.hide();
  }

  onSubmit() {
    if (this.lat && this.lng && this.manageDepot.value.address) {
      const payload: DepotDetails = {
        depot: {
          location: { lat: this.lat, lang: this.lng },
          address: this.manageDepot.value.address,
        },
      };
      if (this.depotId) {
        this.adminService.updateDepot(this.depotId, payload)
          .subscribe(({message}) => this.userMessage= message);
          this.modalRef.hide();
      } else {
        this.adminService
        .registerDepot(payload)
        .subscribe(({ message, depotId }) => {
          this.userMessage = message;
          this.depotId = depotId;
        });
      }
      
    } else {
      this.userMapMessage ='Please click on the map to select the location';
    }
  }

    // closses the update-successful alert message
  	closeUpdateAlert() {
      this.userMessage = null;
      this.userMapMessage = null;
 	 }
}
