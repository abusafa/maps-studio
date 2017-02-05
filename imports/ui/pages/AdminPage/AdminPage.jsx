import React, {PropTypes} from 'react';


export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-frontpage-page">


          <h1>إدارة النظام</h1>
          <img className="frontpage-image" src="/images/frontpage_macbook.png" />

      </div>
    );
  }
}

AdminPage.propTypes = {
};
