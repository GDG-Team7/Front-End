import React from 'react';
import {Route, RouteProps} from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const loggedIn = sessionStorage.getItem('accessToken');

  return loggedIn ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};

export default ProtectedRoute;
