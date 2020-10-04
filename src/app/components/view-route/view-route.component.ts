import { Component, Input, OnInit } from '@angular/core';
import { Orders } from './../../models/orderDetails';


declare var ol: any;
@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.component.html',
  styleUrls: ['./view-route.component.css']
})
export class ViewRouteComponent implements OnInit {

  constructor() { }
  @Input() public order: Orders;


  map: any;
  latitude: Number
  longitude: Number

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
        center: ol.proj.fromLonLat([ 37.41, 8.82]),
        zoom: 5
      })
    });
var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([this.longitude,this.latitude])
  ),
  color: 'red',
});

marker.setStyle(new ol.style.Style({
  image: new ol.style.Icon(({
      color: '#ff6961',
      crossOrigin: 'anonymous',
      src: 'assets/img/dot.png'
  }))
}));

    //add marker
    var layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          marker
        ],
      }),
    });
    this.map.addLayer(layer);

    var lonlat = ol.proj.fromLonLat([33.8, 8.4]);


    var location2 = ol.proj.fromLonLat([37.5, 8.0]);
    var location3 = ol.proj.fromLonLat([39.5, 8.3]);

   var locations = [lonlat,location2,location3]

      var linie2style = [
				// linestring
				new ol.style.Style({
				  stroke: new ol.style.Stroke({
					color: '#d12710',
					width: 2
				  })
				})
			  ];


       for(let i=0;i<locations.length-1;i++){
          var linie2 = new ol.layer.Vector({
            source: new ol.source.Vector({
            features: [new ol.Feature({
              geometry: new ol.geom.LineString([locations[i], locations[i+1]]),
              name: 'Line',
            })]
          })
        });

        linie2.setStyle(linie2style);
        this.map.addLayer(linie2);

      }

      var linie2 = new ol.layer.Vector({
        source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.LineString([locations[locations.length-1], locations[0]]),
          name: 'Line',
        })]
      })
    });

    linie2.setStyle(linie2style);
    this.map.addLayer(linie2);





  }


}
