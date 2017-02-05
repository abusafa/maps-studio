import React, {PropTypes} from 'react';
import classNames  from 'classnames';
import Globals from '/imports/common/global.js';
import { createContainer } from 'meteor/react-meteor-data';
import FeatureAction from '/imports/ui/components/FeatureActions/FeatureActions.jsx';

import '/imports/styles/ResultItemDetailsBox.less';
import styles from './ResultItemDetailsBox.scss';

export default class ResultItemDetailsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  close()
  {
    Globals.ResultItemDetailsBox.set('isOppend', false);
  }




  render() {

    let containerClassNames = {demo:false, 'result-item-details-box':true , animated:true , slideOutDown: !this.props.isOpened, slideInUp: this.props.isOpened};


    return (
      <div className={classNames(containerClassNames)}>
        <button className="button is-warning close-btn" onClick={this.close.bind(this)}><i className="ion-chevron-down"></i> </button>

          <div className="title">
            <span>{this.props.title}</span>
          </div>


          <div>
            <FeatureAction></FeatureAction>
          </div>
        </div>
      );
  }
}

ResultItemDetailsBox.propTypes = {
};




export default createContainer(() => {

  return {
    isOpened: Globals.ResultItemDetailsBox.get('isOppend'),
    title: Globals.ResultItemDetailsBox.get('title'),
    feature: Globals.selectedFeature.get()
  };
}, ResultItemDetailsBox);
