/*
* Copyright (c) 2016- Ihab Abusafa,
* All rights reserved.
*
* This source code is licensed under the license found in the LICENSE file in
* the root directory of this source tree.
*/

import React, {PropTypes}               from 'react';
import styles                           from './MapControls.scss';
import LocateMe from '/imports/ui/components/LocateMe/LocateMe.react.jsx';
import PointerGeoLocation from '/imports/ui/components/PointerGeoLocation/PointerGeoLocation.react.jsx';
import Tooltip from 'react-tooltip';

import FullScreenButton from '/imports/ui/components/FullScreenButton/FullScreenButton.react.jsx';


export default class MapControls extends React.Component {
  constructor(props) {
    super(props);

  }


  renderControlButtons(){
    let buttons = [
      {
        id:1,
        icon:'ion-ios-plus-outline',
        tooltip: 'تكبير الخريطة',
        action:()=>{
          this.props.leaflet.zoomIn();
        }
      },
      {
        id:2,
        icon:'ion-ios-minus-outline',
        tooltip: 'تصغير الخريطة',
        action:()=>{
          this.props.leaflet.zoomOut();
        }
      },
      {
        id:3,
        icon:'ion-ios-printer-outline',
        tooltip: 'طباعة',
        action:()=>{
          window.print();
        }
      }
    ];

    return buttons.map((item) => {
      return (
        <a key={item.id} className={styles.button} data-tip={item.tooltip}  onClick={()=>{item.action();}}>
          <i className={item.icon}></i>
        </a>
      );
    });

  }


  componentWillReceiveProps(nextProps) {
    //console.log("nextProps.leaflet");
    if(nextProps.leaflet != this.props.leaflet)
    {

    }

  }


  renderMenu(){
    let items = [
      /*{
        id:1,
        icon:'ion-ios-bolt-outline',
        label:'Blot',
        isLoading:()=>{
          return '';
        },
        action:()=>{}


      },
      {
        id:3,
        icon:'ion-ios-compose-outline',
        label:'Add',
        isLoading:()=>{
          return '';
        },
        action:()=>{}
      },
      {
        id:4,
        icon:'ion-ios-navigate-outline',
        label:'Navigate',
        isLoading:()=>{
          return '';
        },
        action:()=>{}
      }*/
    ];

    return items.map((item) => {
      return (
        <div key={item.id} className={styles.item} onClick={()=>{item.action();}}>
          <span className={styles.icon}>
            <span className={item.isLoading()}>
              <i className={item.icon} ></i>
            </span>

          </span>
          <span className={styles.label}>{item.label}</span>
        </div>
      );
    });

  }


  render() {
    return (
      <div className={styles.container}>
        <Tooltip delayShow={1000} place="top" effect="solid" />
        <div className={styles.toolbar}>
          {this.renderControlButtons()}

            <FullScreenButton></FullScreenButton>
        </div>
        <PointerGeoLocation leaflet={this.props.leaflet}></PointerGeoLocation>
        <div className={styles.menu}>

          {this.renderMenu()}
          <LocateMe   leaflet={this.props.leaflet} label="موقعي"></LocateMe>

        </div>
      </div>
    );
  }
}

MapControls.propTypes = {
};
