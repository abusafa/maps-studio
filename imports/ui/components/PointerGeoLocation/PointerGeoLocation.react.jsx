/*
* Copyright (c) 2016- Ihab Abusafa,
* All rights reserved.
*
* This source code is licensed under the license found in the LICENSE file in
* the root directory of this source tree.
*/

import React, {PropTypes}               from 'react';
import styles                           from './PointerGeoLocation.scss';
import Lettering from '/imports/libs/Lettering.react.jsx';

export default class PointerGeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng:0
    };
  }


  componentWillReceiveProps(nextProps) {
    //console.log("nextProps.leaflet");
    if(nextProps.leaflet != this.props.leaflet)
    {
      let center = nextProps.leaflet.getCenter();
      this.setState({
        lat:center.lat.toFixed(5),
        lng:center.lng.toFixed(5)
      });

      nextProps.leaflet.on('mousemove', (e) => {
          this.setState({
            lat:e.latlng.lat.toFixed(5),
            lng:e.latlng.lng.toFixed(5)
          });
      });


      nextProps.leaflet.on('click', (e) => {
          this.setState({
            lat:e.latlng.lat.toFixed(5),
            lng:e.latlng.lng.toFixed(5)
          });
      });


    }

  }

  render() {
    return (
      <div className={styles.container}>
        <span>
          <Lettering charClass={styles.char}>
            { this.state.lat + ' , ' + this.state.lng}
          </Lettering>




        </span>
      </div>
    );
  }
}

PointerGeoLocation.propTypes = {
};
