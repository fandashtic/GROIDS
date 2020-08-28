import React from "react";
import {Route, Switch} from "react-router-dom";
import Company from "routes/Company";
import Store from "routes/Store";
import Consumer from "routes/Consumer";
const App = ({match}) =>{ 
  return (
  <div>
    <Switch>
      <Route path={`${match.url}company/`} component={Company}/>
      <Route path={`${match.url}store/`} component={Store}/>
      <Route path={`${match.url}consumer/`} component={Consumer}/>
    </Switch>
  </div>
)};

export default App;
