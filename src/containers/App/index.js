import React, { memo, useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { ConfigProvider } from 'antd';
import MainApp from "./MainApp";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Auth from "config/auth";

import {IntlProvider} from "react-intl";

import AppLocale from "shared/lngProvider";

import {
    locale
} from "constants/ThemeSetting";

const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            authUser 
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: location }
                    }}
                />}
    />;

const App = (props) => {
    const location = useLocation();
    const match = useRouteMatch();

    const setLayoutType = () => {
        document.body.classList.remove('boxed-layout');
        document.body.classList.remove('framed-layout');
        document.body.classList.add('full-layout');
    };
    const setNavStyle = (navStyle) => {
        document.body.classList.add('full-scroll');
        document.body.classList.add('horizontal-layout');
    }

    useEffect(() => {
    //     if (initURL === '') {
    //   dispatch(setInitUrl(location.pathname));
    // }
    // const params = new URLSearchParams(location.search);

    // if (params.has("theme")) {
    //   dispatch(setThemeType(params.get('theme')));
    // }
    // if (params.has("nav-style")) {
    //   dispatch(onNavStyleChange(params.get('nav-style')));
    // }
    // if (params.has("layout-type")) {
    //   dispatch(onLayoutTypeChange(params.get('layout-type')));
    // }
    setLayoutType();
    setNavStyle();
  });

    // useEffect(() => {
    //     if (themeType === THEME_TYPE_DARK) {
    //         console.log("adding dark class")
    //         document.body.classList.add('dark-theme');
    //         document.body.classList.add('dark-theme');
    //         let link = document.createElement('link');
    //         link.type = 'text/css';
    //         link.rel = 'stylesheet';
    //         link.href = "/css/dark_theme.css";
    //         link.className = 'style_dark_theme';
    //         document.body.appendChild(link);
    //     }
    // }, []);
    const currentAppLocale = AppLocale[locale.locale];
  console.log(">>>>>>>>>>>>>>>",Auth.getAuth())
    return (
        <ConfigProvider>
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}>
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <RestrictedRoute path={`${match.url}`} authUser={Auth.getAuth()} location={location}
                    component={MainApp} />
            </Switch>
            </IntlProvider>
        </ConfigProvider >
    )
}

export default memo(App);
