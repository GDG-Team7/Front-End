import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import CallBack from './component/pages/CallbackPage';
import Landing from './component/pages/LandingPage';
import RegisterRoomPage from './component/pages/RegisterRoomPage';
import ProtectedRoute from './routes/ProtectedRoute';
import Routes from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/callback" component={CallBack} />
        <Route path="/register/room" component={RegisterRoomPage} />
        <ProtectedRoute path="/" component={Routes} exact={false} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
