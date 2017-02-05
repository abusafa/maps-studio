import React, {PropTypes} from 'react';
import MapComponentsManager  from '/imports/ui/components/MapComponentsManager/MapComponentsManager.react.jsx';
import BasemapsManager  from '/imports/ui/components/BasemapsManager/BasemapsManager.react.jsx';


export default class MapComponentsPermissionsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BasemapsManager></BasemapsManager>
        <hr/>
        <MapComponentsManager></MapComponentsManager>
      </div>
    );
  }
}

MapComponentsPermissionsPage.propTypes = {
};
