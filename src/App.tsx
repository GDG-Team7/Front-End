import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import CallBack from './component/pages/CallbackPage';
import Landing from './component/pages/LandingPage';
import Login from './component/pages/LoginPage';
import RegisterRoomPage from './component/pages/RegisterRoomPage';
import SignUp from './component/pages/SignUpPage';
import ProtectedRoute from './routes/ProtectedRoute';
import Routes from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/landing" component={Landing} />
        <Route path="/callback" component={CallBack} />
        <Route path="/register/room" component={RegisterRoomPage} />
        <ProtectedRoute path="/" component={Routes} exact={false} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
