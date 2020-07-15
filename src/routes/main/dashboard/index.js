import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/company`}/>
    <Route path={`${match.url}/company`} component={asyncComponent(() => import('./Company/index'))}/>
  </Switch>
);

export default Dashboard;
