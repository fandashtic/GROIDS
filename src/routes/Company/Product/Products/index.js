import React from "react";
import { Route, Switch } from "react-router-dom";
import Table from './table'
import Form from './form'

const Index = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Table} />
      <Route exact path={`${match.url}/add`} component={Form} />
      <Route exact path={`${match.url}/edit/:id`} component={Form} />
      <Route exact path={`${match.url}/view/:id`} component={Form} />
    </Switch>
  )
};

export default Index;