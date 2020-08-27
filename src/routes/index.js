import React from "react";
import {Route, Switch} from "react-router-dom";
import Company from "routes/navigations/company";
import Store from "routes/navigations/store";
const App = ({match}) =>{ 
  return (
  <div>
    <Switch>
      <Route path={`${match.url}company/`} component={Company}/>
      <Route path={`${match.url}store/`} component={Store}/>
    </Switch>
  </div>
)};

export default App;
