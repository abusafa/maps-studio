import React, {Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import { createContainer } from 'meteor/react-meteor-data';

import './sidebar.less';
import styles from './Sidebar.scss';

import SidebarSection from '/imports/ui/components/SidebarSection/SidebarSection.jsx';

import BasemapsSection  from '/imports/ui/components/BasemapsSection/BasemapsSection.jsx';
import LayersSection from '/imports/ui/components/LayersSection/LayersSection.jsx';
import classNames  from 'classnames';
import Globals from '/imports/common/global.js';
import MapConfig from '/imports/libs/MapConfig.js';

import AccountsUIWrapper from '/imports/ui/components/AccountsUIWrapper/AccountsUIWrapper.jsx';


export default class Sidebar extends Component{


  ToggleSidebar(){
    Globals.ToggleSidebar();
  }


  renderAdminLinks(){
    let _links = '';
    if(Roles.userIsInRole(this.props.currentUser, ['sysadmin'], Roles.GLOBAL_GROUP)   )
    {
      let _adminLinks = [
        {
          id:0,
          title:'الإدارة',
          link:'/admin',
          classNames: '',
          icon:'ion-ios-cog-outline'
        }

      ];
      _links = _adminLinks.map((item) => {
        return(

          <Link key={item.id} to={item.link} className={item.classNames}>
            <span className="icon"><i className={item.icon}></i></span>
            <span>
              {item.title}
            </span>
          </Link>
        );
      });

    }


    return _links;
  }









  render(){




    let componentClassNames = {sidebar:true , animated:true , slideOutRight: !this.props.isOpened, slideInRight: this.props.isOpened};
    let backShadowClassNames = { animated:true , "hide-this": !this.props.isOpened, fadeIn: this.props.isOpened};




    return (
      <div className={styles.container}>

        <div  className={classNames(backShadowClassNames)  + ' ' +styles.backShadow } onClick={this.ToggleSidebar.bind(this)}></div>
        <div className={classNames(componentClassNames) + ' ' +styles.content } >

          <header className="header is-fullwidth">
            <div className="organization">
              <img className={styles.logo} src={this.props.logo} />
            <h2 className={styles.title}>{this.props.title}</h2>
            </div>
          </header>

          <Scrollbars  className={styles.scrollFix} autoHide={true}>





          <SidebarSection title='خارطة الأساس'>
            <BasemapsSection></BasemapsSection>
          </SidebarSection>


          <SidebarSection title='البحث في الطبقة'>
            <LayersSection layers={this.props.layers}></LayersSection>
          </SidebarSection>

          <SidebarSection title='حسابي'>
          <AccountsUIWrapper />
          { this.props.currentUser ?
            <div>

              {this.renderAdminLinks()}

            </div>


          : ''
          }
            </SidebarSection>
            <div className={styles.footer}></div>


          </Scrollbars>
        </div>

      </div>

    );
  }



}








Sidebar.propTypes = {
  isOpened: PropTypes.bool,
};


export default createContainer(() => {

  return {
    isOpened: Globals.sidebareState.get('isOppend'),
    layers: Globals.layers.get(),
    currentUser: Meteor.user(),
  };
}, Sidebar);
