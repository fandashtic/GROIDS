import React, { memo, useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { IntlProvider } from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import Website from "../Website";

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
import { UserType } from 'api/Shared/Constant/Enum';
import { IsHasValue, GetUserSession } from 'api/Shared/Util';
import {NotificationContainer} from "react-notifications";
let authUser = true;

const GetRoutePath = (authUser) => {
  console.log(authUser);
  if (IsHasValue(authUser) && IsHasValue(authUser.user_type)) {
    switch (authUser.user_type) {
      case UserType.SUPER_ADMIN:
        return '/dashboard/company';
      case UserType.COMPANY_ADMIN:
        return '/dashboard/company';
      case UserType.STORE_ADMIN:
        return '/store/product';
      case UserType.STORE_STAFF:
        return '/store/product';
      case UserType.CONSUMER:
        return '/consumer/dashboard';
      case UserType.SUPPORT:
        return '/consumer/dashboard';
      default:
        return '/dashboard/company';
    }
  }
  else {
    return '/';
  }
}

const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: GetRoutePath(authUser),
            state: { from: location }
          }}
        />}
  />;

const App = (props) => {
  const [userToken, setUserToken] = useState(null);
  const navStyle = NAV_STYLE_FIXED;

  const locale = {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  };

  const layoutType = LAYOUT_TYPE_FULL
  const location = useLocation();
  const match = useRouteMatch();

  useEffect(() => {
    setLayoutType(layoutType);
    setNavStyle(navStyle);
  });

  useEffect( async() => {
    // let userSession = await GetUserSession();
    // if (IsHasValue(userSession)) {
    //   setUserToken(userSession);
    //   //authUser = true;
    // }
  }, [userToken]);

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

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <Switch>
          <Route exact path='/' component={Website} />
          {/* <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} /> */}
          <RestrictedRoute path={`${match.url}`} authUser={authUser} location={location}
            component={MainApp} />
        </Switch>
      </IntlProvider>
          <NotificationContainer/>
    </ConfigProvider>
  )
};

export default memo(App);
