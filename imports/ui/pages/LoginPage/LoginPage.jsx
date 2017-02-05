import React, {PropTypes} from 'react';
import {Link} from 'react-router';
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Login page </h1>
        <Link className="button is-warning" to="/" >Return to HomePage </Link>
      </div>
    );
  }
}

LoginPage.propTypes = {
};
