import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import AppContainer from '/imports/ui/containers/AppContainer/AppContainer.jsx';
import AdminContainer from '/imports/ui/containers/AdminContainer/AdminContainer.jsx';


import App from '/imports/ui/components/App.jsx';
import AdminPage from '/imports/ui/pages/AdminPage/AdminPage.jsx';
import AdminUsersPage from '/imports/ui/pages/AdminUsersPage/AdminUsersPage.jsx';
import AdminUserPermissionsPage from '/imports/ui/pages/AdminUserPermissionsPage/AdminUserPermissionsPage.jsx';
import MapComponentsPermissionsPage from '/imports/ui/pages/MapComponentsPermissionsPage/MapComponentsPermissionsPage.jsx';

import NotFoundPage from '/imports/ui/pages/NotFoundPage/NotFoundPage.jsx';

import LoginPage from '/imports/ui/pages/LoginPage/LoginPage.jsx';



var isAdmin = (nextState, replace )=>{

  if(!Roles.userIsInRole(Meteor.userId(), ['sysadmin'], Roles.GLOBAL_GROUP)   )
    {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

export const renderRoutes = () => {

  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={App} />
        <Route path="geo/locator" component={App}/>

        <Route path="admin" component={AdminContainer} onEnter={isAdmin}>
          <IndexRoute component={AdminPage} />
          <Route path="users" component={AdminUsersPage}/>
          <Route path="permissions">
            <Route path="layers" component={AdminUserPermissionsPage}/>
            <Route path="components" component={MapComponentsPermissionsPage}/>
          </Route>




        </Route>

        <Route path="login" component={LoginPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>



    </Router>
  );
};
