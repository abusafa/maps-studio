import React, {PropTypes} from 'react';
import '/imports/styles/ListItem';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

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
      <div className="list-item is-fullwidth">
        <span className="icon">
            <i className={this.props.icon}></i>
          </span>
          <span className="title">{this.props.title}</span>
      </div>

    );
  }
}

ListItem.propTypes = {
};
