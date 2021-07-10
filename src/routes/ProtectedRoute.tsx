import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const loggedIn = localStorage.getItem('accessToken');

  return loggedIn ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/landing" />
  );
};

export default ProtectedRoute;
