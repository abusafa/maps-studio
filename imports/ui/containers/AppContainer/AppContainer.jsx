import React, {PropTypes} from 'react';
import '/imports/styles/App.less';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}

AppContainer.propTypes = {
};
