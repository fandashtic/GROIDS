import React from "react";
import { Route, Switch } from "react-router-dom";
import table from './table';
import form from './form';
import view from './details';
const Index = ({ match })=> {
    console.log(match)
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={table} />
            <Route exact path={`${match.url}/add`} component={form} />
            <Route exact path={`${match.url}/edit/:id`} component={form} />
            <Route exact path={`${match.url}/view/:id`} component={view} />
        </Switch>
    )
}

export default Index

