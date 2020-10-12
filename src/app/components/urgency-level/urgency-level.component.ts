import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { ClusterLoaderComponent } from '../cluster-loader/cluster-loader.component';

declare var ol: any;
@Component({
  selector: 'app-urgency-level',
  templateUrl: './urgency-level.component.html',
  styleUrls: ['./urgency-level.component.css']
})
export class UrgencyLevelComponent implements OnInit {
  valueChange = false;
  selectedUrgency = [];
  map: any;
  orders: any;
  ordersHigh: any;
  ordersMedium: any;
  ordersLow: any;
  showLoader:boolean = false;
  clusterMessage;
  constructor(private _storekeeperservice: StoreKeeperService,private modalService: NgbModal) { }
  openLayers: { high, meduim, low } = { high: null, meduim: null, low: null };



  ngOnInit(): void {

    this._storekeeperservice.getUrgentOrders().subscribe(result => {
      this.orders = result;
      console.log(this.orders.high);
      this.ordersHigh = this.orders.high;
      this.ordersMedium = this.orders.medium;
      this.ordersLow = this.orders.low;

    });


    //ploting in the map
    var attribution = new ol.control.Attribution({
      collapsible: false,
    });

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([80.723869, 7.449624]),
        zoom: 8
      })
    });


    this.setMarker();


  }


  setMarker(emergancyLvl = null) {
    //high urgency
    if (this.valueChange) {
var markers = [];
let orderList;
if (emergancyLvl == "high"){
  orderList = this.orders.high;
  this.selectedUrgency.push(1);
}


else if (emergancyLvl == "meduim"){
  orderList = this.orders.medium ;
  this.selectedUrgency.push(2);
}



else if (emergancyLvl == "low"){
  orderList = this.orders.low;
  this.selectedUrgency.push(3);
}


      if(orderList)
      for (let order of orderList ) {
        //add map

        var marker = new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([order.location.lang, order.location.lat])
          ),
          color: 'red',
        });

        marker.setStyle(new ol.style.Style({
          image: new ol.style.Icon(({
            color: emergancyLvl=="high" ? '#FF6961':  (emergancyLvl=="low" ? "#64bd63" : "#FFD700"),
            crossOrigin: 'anonymous',
            src: 'assets/img/dot.png'
          }))
        }));

        markers.push(marker);

      }

        //add marker
        var layer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: markers
          }),
        });
      
        this.map.addLayer(layer);
        if (emergancyLvl == "high")
          this.openLayers.high = layer;

        else if (emergancyLvl == "meduim")
          this.openLayers.meduim = layer;


        else if (emergancyLvl == "low")
          this.openLayers.low = layer;
      
    }
  }

  removeMarker(emergancyLvl) {
    if (emergancyLvl == "high"){
      this.map.removeLayer(this.openLayers.high);
      this.selectedUrgency.splice(this.selectedUrgency.indexOf(1), 1);
    }
    

  else if (emergancyLvl == "meduim"){
    this.map.removeLayer(this.openLayers.meduim);
    this.selectedUrgency.splice(this.selectedUrgency.indexOf(2), 1);
  }
  

  else if (emergancyLvl == "low"){
    this.map.removeLayer(this.openLayers.low);
    this.selectedUrgency.splice(this.selectedUrgency.indexOf(3), 1);
  }
  
    
  }

  onValueChange(value: boolean,emergancyLvl:String) {
    this.valueChange = value;
    if (this.valueChange)
      this.setMarker(emergancyLvl)
    else
      this.removeMarker(emergancyLvl);

console.log(this.selectedUrgency);




  }

  closeUpdateAlert(){
    this.clusterMessage = null;
  }

  // makeCluster(){
  //   this.modalService.open(content, { centered: true });
  //   // const modalRef = this.modalService.open(ClusterLoaderComponent);
    
  //   // modalRef.result.then((result) => {
  //   //   console.log(result);
  //   // }).catch((error) => {
  //   //   console.log(error);
  //   // });
  //     // modalRef.componentInstance.showLoader = this.showLoader;
  //   // this.showLoader = true;
  //   // this._storekeeperservice.makeCluster({emergancyLevels:this.selectedUrgency}).subscribe((response) =>{
  //   //   // this.showLoader = false;
      
      
  //   // },
  //   //     (error) => {
  //   //       console.log(error);
  //   //     }
  //   //   );
  // }

  openVerticallyCentered(content) {
    this.showLoader = true;
    this.modalService.open(content, { centered: true });
    this.modalService.hasOpenModals.bind(this.showLoader);
       this._storekeeperservice.makeCluster({emergancyLevels:this.selectedUrgency}).subscribe((response) =>{
      this.showLoader = false;
      this.clusterMessage = "Grouping successfully done"
      
    },
        (error) => {
          console.log(error);
          this.clusterMessage = "Server Error"
        }
      );
  }

  
  openLoading() {
    
  }

 

}
