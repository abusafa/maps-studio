import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import styles from './MapView.scss';


import Map from '/imports/api/Map.js';
import MapControls from '/imports/ui/components/MapControls/MapControls.react.jsx';

import Globals from '/imports/common/global.js';

export default class MapView extends Component {

  constructor()
  {
    super();
    this.map = new Map();
  }

  componentDidMount() {
      this.map.mount();
  }



  componentWillReceiveProps(nextProps) {

    if(this.props.basemaps != nextProps.basemaps)
    {
      this.map.addBasemaps(nextProps.basemaps);
    }


    if (nextProps.selecteFeature !== this.props.selecteFeature) {
      this.map.setFeature(nextProps.selecteFeature, {panTo:[0,110], isFitBounds:true});
    }


    if (nextProps.selectedBasemap && nextProps.selectedBasemap.id) {
      this.map.setBasemap(nextProps.selectedBasemap.id);
    }

  }

  render() {
    return (
      <div className={styles.container}>
        <MapControls leaflet={this.map.leaflet}></MapControls>
        <div id="map-canvas" className={styles.map}></div>
      </div>

    );
  }
}





MapView.propTypes = {
  selecteFeature: PropTypes.object,
  selectedBasemap: PropTypes.object,
};


export default createContainer(() => {

  return {
    selecteFeature: Globals.selectedFeature.get(),
    selectedBasemap: Globals.selectedBasemap.get(),
  };
}, MapView);
