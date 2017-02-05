import React, { Component } from 'react';
import Globals from '/imports/common/global.js';
import ListItem from '/imports/ui/components/ListItem/ListItem.jsx';

export default class LayerItem extends Component{

  selectLayer()
  {
    console.log("layer", this.props.layer.name);
    Globals.selectedLayer.set(this.props.layer);
    Globals.CloseSidebar();


  }


  render(){
    return (
      <div onClick={this.selectLayer.bind(this)}>
        <ListItem title={this.props.layer.title} icon={this.props.layer.icon}  />
      </div>
    );
  }
}
