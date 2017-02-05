import { Meteor } from 'meteor/meteor';
import { Configs } from '/imports/api/Configs.js';
import Globals from '/imports/common/global.js';

class MapConfig {

  constructor()
  {

    this.loadLayersConfig();
    this.basemaps = {};
    this.layers = [];
  }


  loadLayersConfig(){
    Meteor.subscribe("configs", {
      onReady: () => {
        let layersConf = Configs.findOne({name:'layers'});
        let basemapsConf = Configs.findOne({name:'basemaps'});
        let layers = [];
        let basemaps = [];
        if(layersConf) layers = layersConf.layers;
        if(basemapsConf) basemaps = basemapsConf.basemaps;
        //console.log("basemaps", basemaps);
        Globals.layers.set(layers);
        Globals.basemaps.set(basemaps);
        Globals.selectedBasemap.set(basemaps[0]);
        Globals.selectedLayer.set(layers[0]);

      },
      onError: () => { console.log("onError", arguments); }
    });
  }
}



export default (new MapConfig());
