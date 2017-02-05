import React, {Component} from 'react';
import LayerItem from '/imports/ui/components/LayerItem/LayerItem.jsx';
import ScrollContents from '/imports/ui/components/ScrollContents/ScrollContents.jsx';


export default class LayersSection extends Component{


  renderLayerItems(){
    return this.props.layers.map((layer)=>(
      <LayerItem key={layer.id} layer={layer}></LayerItem>
    ));
  }

  render(){
    return(
      <div>
          {this.renderLayerItems()}
      </div>
    );
  }
}
