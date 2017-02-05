/*
* Copyright (c) 2016- Ihab Abusafa,
* All rights reserved.
*
* This source code is licensed under the license found in the LICENSE file in
* the root directory of this source tree.
*/

import React, {PropTypes}               from 'react';
import styles                           from './FullScreenButton.scss';
import screenfull from 'screenfull';
//import BigScreen from 'bigscreen';
import Tooltip from 'react-tooltip';


export default class FullScreenButton extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      fullScreenIcon : 'ion-arrow-expand'
    };
  }


  toggleFullscreen(){
    if (screenfull.enabled) {

        screenfull.toggle();
        //BigScreen.toggle();

        if(screenfull.isFullscreen)
        {
          this.setState({fullScreenIcon : 'ion-arrow-shrink'});
        }
        else {
          this.setState({fullScreenIcon : 'ion-arrow-expand'});
        }
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Tooltip id="FullScreenButton" delayShow={1000} place="top" effect="solid">
          <span>تكبير وتصغير الشاشة</span>
        </Tooltip>

        <a  className={styles.button} data-tip data-for="FullScreenButton"  onClick={()=>{this.toggleFullscreen();}}>
          <i className={this.state.fullScreenIcon}></i>
        </a>
    </div>
    );
  }
}

FullScreenButton.propTypes = {
};
