import React from "react";
import { Route, Switch } from "react-router-dom";
import Table from './table'
import Form from './form'
import View from './details'

const Index = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Table} />
      <Route exact path={`${match.url}/add`} component={Form} />
      <Route exact path={`${match.url}/edit/:id`} component={Form} />
      <Route exact path={`${match.url}/view/:id`} component={View} />
    </Switch>
  )
};

export default Index;