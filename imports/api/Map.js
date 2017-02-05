import { each } from 'lodash';




export default class Map {
  constructor(){

    this.accessToken = "pk.eyJ1IjoiaWhhYiIsImEiOiJZT19QbkJJIn0.ROWLhlTd-2mI94QvdzrH8g";
    this.geojsonSearchFeatureLayer = L.mapbox.featureLayer();
    this.featureGroup = L.featureGroup();
    this.basemaps = {};
  }

  mount()
  {
    L.mapbox.accessToken = this.accessToken;
    this.leaflet = L.mapbox.map('map-canvas', null,
    {
      zoomControl:false ,
      maxZoom: 19,
      attributionControl: false

    }).setView([26.095661, 43.990880], 12);

    this.featureGroup.addTo(this.leaflet);
    this.geojsonSearchFeatureLayer.addTo(this.leaflet);
    this.setControls({fullScreen:false});


    this.leaflet.on('contextmenu' , (e)=>
    {
      console.log("contextmenu", e);

    });


    return this;
  }



  setControls(options){
    if(options.fullScreen)
    {
      L.control.fullscreen().addTo(this.leaflet);
    }

    return this;

  }

  setFeature(selecteFeature, options){
    let { panTo, isFitBounds } = options;
    this.geojsonSearchFeatureLayer.setGeoJSON(selecteFeature);

    if(isFitBounds)
    {
      this.leaflet.fitBounds(this.geojsonSearchFeatureLayer.getBounds());
    }
    if(panTo)
    {
      this.leaflet.panBy(panTo);
    }
  }


  addBasemaps(basemaps){
    each(basemaps, (map)=>{
      switch(map.type){
        case "tileLayer":
        this.basemaps[map.id] = L.tileLayer(map.url, map.options);
        break;

        case "mapbox.tileLayer" :
          this.basemaps[map.id] = L.mapbox.tileLayer(map.id, map.options);
        break;
      }
    });
    return this;
  }





  setBasemap(id)
  {
    if(!id) return this;

    try {
      each( this.basemaps,  (basemap)=>{
        this.leaflet.removeLayer(basemap);
      });

    } catch (err) {
      console.log(err);
    }

    this.leaflet.addLayer(this.basemaps[id]);



    return this;
  }
}
