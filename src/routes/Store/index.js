import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Product from "./Product";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Inventory from "./Inventory"
import Schemes from './Schemes';
import Reports from './Reports'; 
import Payment from './Payment';
import Delivery from './Delivery'
import  Settings from './Settings'

const App = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.path}`} to={`${match.url}/dashboard`} />
      <Route path={`${match.path}dashboard`} component={Dashboard} />
      <Route path={`${match.path}products`} component={Product} />
      <Route path={`${match.path}orders`} component={Orders} />
      <Route path={`${match.path}inventory`} component={Inventory} />
      <Route path={`${match.path}schemes`} component={Schemes} />
      <Route path={`${match.path}reports`} component={Reports} />
      <Route path={`${match.path}payment`} component={Payment} />
      <Route path={`${match.path}delivery`} component={Delivery} />
      <Route path={`${match.path}settings`} component={Settings} />
    </Switch>
  </div>
);

export default App;