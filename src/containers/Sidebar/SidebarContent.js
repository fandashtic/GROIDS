import React, { useContext } from "react";
import Context from "appRedux/context";
import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
} from "constants/ThemeSetting";
import AppsNavigation from "./AppsNavigation";
import { UserType } from 'api/Shared/Constant/Enum'
import { IsHasValue } from 'api/Shared/Util';
import CompanySideBar from './CompanySideBar'

const SidebarContent = () => {
  const { state } = useContext(Context);
  const { themeType, navStyle ,user} = state

  
  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  // const getNavStyleSubMenuClass = (navStyle) => {
  //   if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
  //     return "gx-no-header-submenu-popup";
  //   }
  //   return "";
  // };
  const GetRoutePath = (authUser) => {
    if (IsHasValue(authUser) && IsHasValue(authUser.UserType)) {
      switch (authUser.UserType) {
        case UserType.SUPER_ADMIN:
          return <CompanySideBar/>
        case UserType.COMPANY_ADMIN:
        case UserType.STORE_ADMIN:
        case UserType.STORE_STAFF:
        case UserType.CONSUMER:
        case UserType.SUPPORT:
        default:
          return <CompanySideBar/>
      }
    }
  }
  
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          {GetRoutePath(user)}
        </CustomScrollbars>
      </div>
    </>
  );
};




SidebarContent.propTypes = {};
export default SidebarContent;

