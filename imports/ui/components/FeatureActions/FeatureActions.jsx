import React, {PropTypes} from 'react';
import './FeatureActions.less';

import styles from './FeatureActions.scss';

export default class FeatureActions extends React.Component {
  constructor(props) {
    super(props);
  }


  renderActionButtons(){
    let _buttons = [
      /*{
          id:1,
          label:'مفضلة',
          name:'bookmark',
          icon:'ion-ios-bookmarks-outline'
      },
      {
          id:2,
          label:'مشاركة',
          name:'share',
          icon:'ion-ios-upload-outline'
      },
      {
          id:3,
          label:'المسار',
          name:'navigate',
          icon:'ion-ios-navigate-outline'
      }*/
    ];
    return _buttons.map((item) => {
      return (
        <a className={styles.button + " button"} key={item.id}>
          <span className="icon">
            <i className={item.icon}></i>
          </span>
          <span>{item.label}</span>
        </a>
      );
    });
  }

  render() {
    return (
      <div className='feature-action-buttons'>
        <div className={styles.container}>
          {this.renderActionButtons()}
        </div>

      </div>
    );
  }
}

FeatureActions.propTypes = {
};
