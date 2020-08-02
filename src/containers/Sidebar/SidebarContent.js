import React, { useContext } from "react";
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

const SubMenu = Menu.SubMenu;

const SidebarContent = () => {
  const { state } = useContext(Context);
  const { themeType, pathname, navStyle } = state

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile />
          <AppsNavigation />
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
            <SubMenu key="dashboard" popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={<span> <i className="icon icon-company" />
                <span><IntlMessages id="sidebar.master" /></span></span>}>
              <Menu.Item key="main/manufacturer">
                <Link to="/manufacturer">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.manufacturer" /></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="main/brand">
                <Link to="/brand">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.brand" /></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="main/category">
                <Link to="/category">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.category" /></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="main/family">
                <Link to="/family">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.family" /></span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="main/Product">
              <Link to="/product"><i
                className="icon icon-folder-o" /><span><IntlMessages
                  id="sidebar.products" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/Stores">
              <Link to="/stores"><i
                className="icon icon-inbuilt-apps" /><span><IntlMessages
                  id="sidebar.stores" /></span></Link>
            </Menu.Item>
            <SubMenu key="settings" popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={<span> <i className="icon icon-setting" />
                <span><IntlMessages id="sidebar.settings" /></span></span>}>
              <Menu.Item key="main/accounts">
                <Link to="/settings"><i
                  className="icon icon-extra-components" /><span><IntlMessages
                    id="sidebar.settings.accounts" /></span></Link>
              </Menu.Item>
              <Menu.Item key="main/company">
                <Link to="/settings"><i
                  className="icon icon-extra-components" /><span><IntlMessages
                    id="sidebar.settings.company" /></span></Link>
              </Menu.Item>
              <Menu.Item key="main/location">
                <Link to="/settings"><i
                  className="icon icon-extra-components" /><span><IntlMessages
                    id="sidebar.settings.location" /></span></Link>
              </Menu.Item>
              <Menu.Item key="main/payment">
                <Link to="/settings"><i
                  className="icon icon-extra-components" /><span><IntlMessages
                    id="sidebar.settings.payment" /></span></Link>
              </Menu.Item>
            </SubMenu>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

