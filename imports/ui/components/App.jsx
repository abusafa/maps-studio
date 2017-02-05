import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';



import MapView from '/imports/ui/components/MapView/MapView.react';
import Sidebar from '/imports/ui/components/Sidebar/Sidebar.jsx';
import SearchBar from '/imports/ui/components/SearchBar/SearchBar.react.jsx';
import SearchResultsBox from '/imports/ui/components/SearchResultsBox/SearchResultsBox.jsx';

import styles from './App.scss';

import Globals from '/imports/common/global.js';
import MapConfig from '/imports/libs/MapConfig.js';

// App component - represents the whole app
export default class App extends Component {


  constructor(){
    super();
    Globals.selectedLayer.set(MapConfig.layers[0]);

  }

  getSearchPlaceHolder(){
    let _placeholder = '';

    if(this.props.selectedLayer)
      _placeholder = 'البحث في '+ this.props.selectedLayer.title;

      return _placeholder;

  }


  render() {




    return (

      <div className={styles.main}  >
        <Sidebar title='المستكشف الجغرافي لبلدية عنيزة' logo="/images/Unaizah_Municipality_logo.jpg"></Sidebar>
        <div className={styles.container}>



            <SearchBar placeholder={this.getSearchPlaceHolder()} layer={this.props.selectedLayer}/>
            <SearchResultsBox layer={this.props.selectedLayer} />


        </div>
        <div>
        <MapView basemaps={this.props.basemaps}></MapView>
        </div>

      </div>
    );
  }
}











App.propTypes = {
  selectedLayer: PropTypes.object
};


export default createContainer(() => {
  Meteor.subscribe("configs");
  return {
    selectedLayer: Globals.selectedLayer.get(),
    basemaps : Globals.basemaps.get()
  };
}, App);
