import React, { memo, useEffect, useState, useContext } from "react";
import { Redirect, Route, Switch, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { IntlProvider } from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import Website from "../../routes/Website";
import Context from "appRedux/context";
import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_FIXED
} from "constants/ThemeSetting";
import { NotificationContainer } from "react-notifications";
import { login} from "appRedux/actions/auth";
import { IsHasValue } from 'api/Shared/Util';
const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />}
  />;

const App = () => {
  const { state,dispatch } = useContext(Context);
  const { isAuthUser ,user,pathName} = state;

  const navStyle = NAV_STYLE_FIXED;
  const locale = {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  };

  const layoutType = LAYOUT_TYPE_FULL
  const location = useLocation();
  const history = useHistory()
  const match = useRouteMatch()

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user"))
    if(IsHasValue(userData)){
      dispatch(login(userData,dispatch))
    } else{
      history.push('/')
    } 
    setLayoutType(layoutType);
    setNavStyle(navStyle);
  },[]);



  const setLayoutType = (layoutType) => {
    if (layoutType === LAYOUT_TYPE_FULL) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === LAYOUT_TYPE_BOXED) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === LAYOUT_TYPE_FRAMED) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  };

  const setNavStyle = (navStyle) => {
    if (navStyle === NAV_STYLE_DEFAULT_HORIZONTAL ||
      navStyle === NAV_STYLE_DARK_HORIZONTAL ||
      navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL ||
      navStyle === NAV_STYLE_ABOVE_HEADER ||
      navStyle === NAV_STYLE_BELOW_HEADER) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  };

  useEffect(() => {
    if(isAuthUser ){
      history.push(pathName)
    }
  },[user,isAuthUser]);

  const currentAppLocale = AppLocale[locale.locale];
  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <Switch>
          <Route exact path='/' component={Website} />
          <RestrictedRoute path={`${match.url}`} authUser={isAuthUser} location={location}
            component={MainApp} />
        </Switch>
      </IntlProvider>
      <NotificationContainer />
    </ConfigProvider>
  )
};

export default memo(App);
