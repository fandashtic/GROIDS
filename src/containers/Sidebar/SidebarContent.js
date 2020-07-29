import React,{useContext} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Context from "appRedux/context";
import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {
  THEME_TYPE_LITE,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
} from "constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import AppsNavigation from "./AppsNavigation";
import UserProfile from "./UserProfile";

const SidebarContent = () => {
  const { state } = useContext(Context);
  const {themeType, pathname, navStyle} = state

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
      <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile />
          <AppsNavigation/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">
            <Menu.Item key="main/dashboard">
              <Link to="/dashboard/company"><i
                className="icon icon-dasbhoard" /><span><IntlMessages id="sidebar.dashboard" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/Product">
              <Link to="/product"><i
                className="icon icon-folder" /><span><IntlMessages
                  id="sidebar.products" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/Stores">
              <Link to="/stores"><i
                className="icon icon-inbuilt-apps" /><span><IntlMessages
                  id="sidebar.stores" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/Settings">
              <Link to="/settings"><i
                className="icon icon-components" /><span><IntlMessages
                  id="sidebar.settings" /></span></Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

