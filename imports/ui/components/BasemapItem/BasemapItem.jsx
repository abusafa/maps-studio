import React , { Component } from 'react';
import Globals    from '/imports/common/global.js';
import ListItem from '/imports/ui/components/ListItem/ListItem.jsx';

export default class BasemapItem extends Component
{

  setBasemap()
  {

    let { item } = this.props;

    Globals.CloseSidebar();
    Globals.selectedBasemap.set(item);
  }

  render(){
    return(
      <div onClick={this.setBasemap.bind(this)}>
        <ListItem title={this.props.item.label} icon={this.props.item.icon}  />
      </div>
    );

  }

}
