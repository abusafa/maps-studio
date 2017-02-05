import React , {Component} from 'react';
import Globals from '/imports/common/global.js';
import ListItem from '/imports/ui/components/ListItem/ListItem.jsx';

export default class SearchResultItem extends Component{


  setSelectedItem()
  {
    console.log("setSelectedItem::::", this.props.result);

    Globals.selectedFeature.set(this.props.result.feature);
    Globals.ResultItemDetailsBox.set('isOppend', true);
    Globals.ResultItemDetailsBox.set('title', this.props.result.title);
  }

  render(){

    var styles = {
      titleBox:{
        borderBottom: "1px solid rgba(255, 255, 255, 0.16)"
      },
      title:{
        lineHeight: "28px",
      },
      icon:{
        fontSize: "23px"
      }
    };

    return (
      <div onClick={this.setSelectedItem.bind(this)}  >
        <ListItem title={this.props.result.title} icon='ion-ios-location-outline' />
      </div>
    );
  }
}
