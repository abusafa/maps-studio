import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import AccountsUIWrapper from '/imports/ui/components/AccountsUIWrapper/AccountsUIWrapper.jsx';

export default class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
  }


  renderItems(){
    let _items = [
      {
        id:0,
        title:'الرئيسية',
        link:'/admin',
        classNames: 'nav-item is-tab is-active'
      },
      {
        id:2,
        title:'الخريطة',
        link:'/',
        classNames: 'nav-item is-tab'
      },
      {
        id:3,
        title:'المستخدمون',
        link:'/admin/users',
        classNames: 'nav-item is-tab'
      },
      {
        id:4,
        title:'الطبقات',
        link:'/admin/permissions/layers',
        classNames: 'nav-item is-tab'
      },
      {
        id:5,
        title:'مكونات الخريطة',
        link:'/admin/permissions/components',
        classNames: 'nav-item is-tab'
      }
    ];


    return _items.map((item) => {
      return(
        <Link key={item.id} to={item.link} className={item.classNames}>{item.title}</Link>
      );
    });



  }




  render() {



    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            {this.renderItems()}
          </div>
          <div className="nav-right">
            <div className="accounts-ui">
              <AccountsUIWrapper></AccountsUIWrapper>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

AdminNavbar.propTypes = {
};
