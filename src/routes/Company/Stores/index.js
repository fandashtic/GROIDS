import React from "react";
import { Route, Switch } from "react-router-dom";
import table from './table'
import form from './form'
import view from './details'
const Index = ({ match })=> {
    return (
        <Switch>
            <Route path={`${match.path}`} component={table} />
            <Route path={`${match.path}Add`} component={form} />
            <Route path={`${match.path}edit/:id`} component={form} />
            <Route path={`${match.path}view/:id`} component={view} />
        </Switch>
    )
}

export default Index

