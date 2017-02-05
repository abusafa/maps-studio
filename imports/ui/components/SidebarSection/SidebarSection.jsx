import React , { Component } from 'react';
export default class SidebarSection  extends Component{





  render(){
    return (
      <div className="card is-fullwidth">
        <header class="card-header">
          <p className="card-header-title">
            {this.props.title}
          </p>
          <a className="card-header-icon">
            <i className="fa fa-angle-down"></i>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
