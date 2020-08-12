import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Main from "../main/dashboard/Store";
import Product from "../Store/Product";
import Products from "../Store/Product/Product";
import Stores from "../Company/Stores";
import Settings from "../Company/Setttings";
import Orders from "../Store/Orders";

import UnitTest from "../UnitTest"

const App = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.path}`} to={`${match.url}/dashboard`} />
      <Route path={`${match.path}dashboard`} component={Main} />
      <Route path={`${match.path}products`} component={Product} />
      <Route path={`${match.path}product`} component={Products} />
      <Route path={`${match.path}stores`} component={Stores} />
      <Route path={`${match.path}settings`} component={Settings} />
      <Route path={`${match.path}unittest`} component={UnitTest} />

      <Route path={`${match.path}orders`} component={Orders} />
    </Switch>
  </div>
);

export default App;