import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../component/pages/MainPage';
import MyRoomPage from '../component/pages/MyRoomPage';
import ProfilePage from '../component/pages/ProfilePage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/myRoom" component={MyRoomPage} />
    </Switch>
  );
};

export default React.memo(Routes);
