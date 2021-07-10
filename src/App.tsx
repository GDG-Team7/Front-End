import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import CallBack from './component/pages/CallbackPage';
import Landing from './component/pages/LandingPage';
import Main from './component/pages/MainPage';

const App = () => {
  const loggedIn = localStorage.getItem('isAuthenticated');

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/callback" component={CallBack} />
        {loggedIn ? (
          <Route path={'/main'} exact={true} component={Main} />
        ) : (
          <Redirect to="/landing" />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
