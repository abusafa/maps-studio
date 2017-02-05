/*
* Copyright (c) 2016- Ihab Abusafa,
* All rights reserved.
*
* This source code is licensed under the license found in the LICENSE file in
* the root directory of this source tree.
*/

import React, {PropTypes}               from 'react';
import styles                           from './LocateMe.scss';

import Tooltip from 'react-tooltip';








export default class LocateMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFindingLocation : false,
      lat:0,
      lng:0
    };
    this.myLocationLayer = L.mapbox.featureLayer();


  }


  getGeojson(){
    return [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [this.state.lng,this.state.lat]
        },
        "properties": {
          "marker-color": "#3ca0d3",
          "marker-size": "large",
          "marker-symbol": "rocket"
        }
      }
    ];
  }




  locateMe()
  {
    console.log("locateMe");

    this.setState({isFindingLocation:true});
    this.props.leaflet.locate({setView: true});
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.leaflet != this.props.leaflet)
    {

      this.myLocationLayer.addTo(nextProps.leaflet);

      nextProps.leaflet.on('locationfound', (e) => {
        this.setState({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          isFindingLocation:false
        });

        this.myLocationLayer.setGeoJSON(this.getGeojson());
      });

      nextProps.leaflet.on('locationerror', (e) => {
        this.setState({isFindingLocation:false});
      });
    }
  }

  render() {
    let isLoading =()=>{
      let className = '';
      if(this.state.isFindingLocation){
        className = 'icon-is-loading';
      }
      return className;
    };


    return (
      <div>
        <Tooltip id="LocateMeButton" delayShow={1000} place="right" effect="solid">
          <span>تحديد موقعي</span>
        </Tooltip>

        <div className={styles.item}  data-tip data-for="LocateMeButton"  onClick={()=>{this.locateMe();}}>

          <span className={styles.icon}>
            <span className={isLoading()}>
              <i className="ion-pinpoint" ></i>
            </span>

          </span>
          <span className={styles.label}>{this.props.label}</span>

        </div>
      </div>

    );
  }
}

LocateMe.propTypes = {
};
