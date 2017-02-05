import React, {PropTypes} from 'react';
import LayerPermissions from '/imports/ui/components/LayerPermissions/LayerPermissions.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import Globals from '/imports/common/global.js';

import ListItem from '/imports/ui/components/ListItem/ListItem.jsx';
import MapConfig from '/imports/libs/MapConfig.js';


export default class AdminUserPermissionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLayer : {}
    };
  }


  selectLayer(layer)
  {
    console.log(layer);
    this.setState({
      selectedLayer: layer,
    });

  }



  renderLayerItems(){
    return this.props.layers.map((layer) => {
      return(
        <div key={layer.id} onClick={() => this.selectLayer(layer)}>
        <ListItem  title={layer.title} icon="ion-ios-arrow-left"></ListItem>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="notification "> إدارة الصلاحيات على الطبقات</h1>

          <div className="columns">
            <div className="column">
                <h1 className="notification   is-warning">الطبقة</h1>

                {this.renderLayerItems()}
            </div>

            <div className="column is-three-quarters">
              <LayerPermissions layer={this.state.selectedLayer}></LayerPermissions>
            </div>

          </div>
      </div>
    );
  }
}

AdminUserPermissionsPage.propTypes = {
};



export default createContainer(() => {
  Meteor.subscribe("configs");
  return {
    basemaps : Globals.basemaps.get(),
    layers : Globals.layers.get(),
  };
}, AdminUserPermissionsPage);
