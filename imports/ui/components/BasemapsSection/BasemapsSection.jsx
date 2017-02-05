import React,{ Component } from 'react';
import BasemapItem from '/imports/ui/components/BasemapItem/BasemapItem.jsx';
import MapConfig from '/imports/libs/MapConfig.js';
import ScrollContents from '/imports/ui/components/ScrollContents/ScrollContents.jsx';
import Globals from '/imports/common/global.js';
import { createContainer } from 'meteor/react-meteor-data';


export default class BasemapsSection  extends Component{



  renderBasenapsButtons()
  {
    let _basemaps = [
      {
        title:'خارطة الأساس',
        name:'unizah',
        id:'unizah',
        icon:'ion-map'
      },
      {
        title:'المصور الفضائي',
        name:'satellite',
        id:'mapbox.satellite',
        icon:'ion-ios-world-outline'
      },
      {
        title:'الشوارع',
        name:'streets',
        id:'mapbox.streets',
        icon:'ion-android-car'
      },
      {
        title:'ليلي',
        name:'dark',
        id:'mapbox.dark',
        icon:'ion-android-car'
      }


    ];
    return this.props.basemaps.map((item)=>
       (
        <BasemapItem key={item.id} item={item}></BasemapItem>
      ));
  }

  render(){
    return (
      <div>
          {this.renderBasenapsButtons()}
      </div>
    );
  }
}


BasemapsSection.propTypes = {

};


export default createContainer(() => {
  Meteor.subscribe("configs");
  return {
    basemaps : Globals.basemaps.get()
  };
}, BasemapsSection);
