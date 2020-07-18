import React from "react";
import {Route, Switch} from "react-router-dom";


import Main from "./main/index";
import Product from "./Company/Product"
import Stores from "./Company/Stores"
import Settings from "./Company/Setttings"
import UnitTest from "./UnitTest"
const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Main}/>
      <Route path={`${match.url}product`} component={Product}/>
      <Route path={`${match.url}stores`} component={Stores}/>
      <Route path={`${match.url}settings`} component={Settings}/>
      <Route path={`${match.url}unittest`} component={UnitTest}/>
    </Switch>
  </div>
);

export default App;
