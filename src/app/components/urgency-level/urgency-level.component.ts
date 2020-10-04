import { Component, OnInit } from '@angular/core';

declare var ol: any;
@Component({
  selector: 'app-urgency-level',
  templateUrl: './urgency-level.component.html',
  styleUrls: ['./urgency-level.component.css']
})
export class UrgencyLevelComponent implements OnInit {
  valueChange = false;
  map: any;
  constructor() { }

  ngOnInit(): void {

    var attribution = new ol.control.Attribution({
      collapsible: false,
    });

     //add map
     this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([ 79.859936, 6.879386]),
        zoom: 12
      })
    });


   
        //add marker
        var layer0 = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
              new ol.Feature({
                geometry: new ol.geom.Point(
                  ol.proj.fromLonLat([79.859936, 6.879386])
                ),
                color: "red",
              }),
            ],
          }),
        });
        this.map.addLayer(layer0);




  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }

}
