import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import CompanySetting from './CompanyProfile'
import {UserprofileSetting,demo} from './UserProfile'

const account = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.path}`} to={`${match.path}/CompanyProfile`} />
      <Route exact path={`${match.path}/CompanySetting`} component={CompanySetting} />
      <Route exact path={`${match.path}/userprofile`} component={UserprofileSetting} />
    </Switch>
  )
};

export default account;