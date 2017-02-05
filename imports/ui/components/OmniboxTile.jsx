import React , { Component } from 'react';
import classnames from 'classnames';

export default class OmniboxTile extends Component {


  render()
  {
    var classNames = classnames({
      "tile":true, "is-parent":true, "is-vertical":true
    });

    return (
      <div className={classNames}>
      </div>
    );
  }
}
