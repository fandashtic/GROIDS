import React from "react";
import { Route, Switch } from "react-router-dom";
// import account from './Accounts'
// import locationView from './Location'
import  CompanyProfile from "./Accounts/CompanyProfile"
import  UserProfile from  "./Accounts/UserProfile"
import  ChangePassword from "./Accounts/ChangePassword"
import  Country from "./Location/Country"
import Area from "./Location/Area"
import City from "./Location/City"
import State from "./Location/State"
const Index = ({ match }) => {
  console.log("setting" ,match)
  return (
    <Switch>
      <Route exact path={`${match.url}/accounts/CompanyProfile`} component={CompanyProfile} />
      <Route exact path={`${match.url}/accounts/UserProfile`} component={UserProfile} />
      <Route exact path ={`${match.url}/accounts/ChangePassword`} component = {ChangePassword}/>
      <Route exact path ={`${match.url}/Location/Country`} component = {Country}/>
      <Route exact path ={`${match.url}/Location/Area`} component = {Area}/>
      <Route exact path={`${match.url}/Location/City`} component = {City}/>
      <Route exact path={`${match.url}/Location/State`} component = {State}/>
    </Switch>
  )
};

export default Index;
