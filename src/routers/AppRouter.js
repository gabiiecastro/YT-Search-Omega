import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import * as History from 'history';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import WatchVideoPage from '../components/WatchVideoPage';
import WatchLaterPage from '../components/WatchLaterPage';


export const history = History.createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/search" component={DashboardPage} />
        <PrivateRoute path="/dashboard" component={WatchVideoPage} />   
        <PrivateRoute path="/watch/:id" component={WatchLaterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
