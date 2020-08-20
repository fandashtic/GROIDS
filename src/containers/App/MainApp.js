import React,{useContext,useEffect,useState} from "react";
import {Layout} from "antd";

import Sidebar from "../Sidebar/index";
import App from "routes/index";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "constants/ThemeSetting";
import Context from "appRedux/context";
import {useRouteMatch} from "react-router-dom";
import { UserType } from 'api/Shared/Constant/Enum';
import { IsHasValue, GetUserSession } from 'api/Shared/Util';

const {Content} = Layout;

const GetRoutePath = (authUser) => {
  if (IsHasValue(authUser) && IsHasValue(authUser.UserType)) {
    switch (authUser.UserType) {
      case UserType.SUPER_ADMIN:
        return '/company/dashboard';
      case UserType.COMPANY_ADMIN:
        return '/company/dashboard';
      case UserType.STORE_ADMIN:
        return '/store/product';
      case UserType.STORE_STAFF:
        return '/store/product';
      case UserType.CONSUMER:
        return '/consumer/dashboard';
      case UserType.SUPPORT:
        return '/consumer/dashboard';
      default:
        return '/company/dashboard';
    }
  }
  else {
    return '/';
  }
}

const MainApp = () => {
   const [user, setUser] = useState()
  const { state } = useContext(Context);
  const {navStyle,width} = state

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };
  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar/>;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED :
        return <Sidebar/>;
      case NAV_STYLE_DRAWER :
        return <Sidebar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar/>;
      default :
        return null;
    }
  };
  useEffect(async() => {
    let  user = await GetUserSession()
    setUser(user)
  },[]);


  return (
   <Layout className="gx-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        <Content className={`gx-layout-content ${getContainerClass(navStyle)} `}>
          <App match={GetRoutePath(user)}/>
        </Content>
      </Layout>
    </Layout>
  )
};
export default MainApp;

