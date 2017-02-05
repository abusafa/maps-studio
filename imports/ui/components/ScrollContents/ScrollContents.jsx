import React, {PropTypes} from 'react';

export default class ScrollContents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    let height = this.props.height || '100px';
    let styles = {
      height: height,
      overflow: 'hidden',
      overflowY: 'auto'
    };

    return (<div className="scroll-content-y" style={styles}>{this.props.children}</div>);
  }
}

ScrollContents.propTypes = {
};
