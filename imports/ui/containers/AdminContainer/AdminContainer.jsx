import React, {PropTypes} from 'react';
import AdminNavbar from '/imports/ui/components/AdminNavBar/AdminNavBar.jsx';
import '/imports/styles/Admin/index';

export default class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-container">
        <AdminNavbar></AdminNavbar>
          <div className="">
            <div className=" compnent-container">
                {this.props.children}
            </div>
          </div>



      </div>
    );
  }
}

AdminContainer.propTypes = {
};
