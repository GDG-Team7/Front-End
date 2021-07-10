import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../component/pages/MainPage';
import ProfilePage from '../component/pages/ProfilePage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact={false} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  );
};

export default React.memo(Routes);
