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


const SubMenu = Menu.SubMenu;

const SidebarContent = () => {
  const { state } = useContext(Context);
  const { themeType, navStyle } = state

  const selectedKeys = window.location.pathname;
  const defaultOpenKeys = selectedKeys;
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

  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">
            <Menu.Item key="/company/dashboard">
              <Link to="/company/dashboard"><i
                className="icon icon-dasbhoard" /><span><IntlMessages id="sidebar.dashboard" /></span></Link>
            </Menu.Item>
            <SubMenu key="master" title={<span><i className="icon icon-widgets" />
              <span><IntlMessages id="sidebar.master" /> </span></span>}>
              <Menu.Item key="/company/master/manufacture">
                <Link to="/company/master/manufacture">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.manufacture" /></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/company/master/brand">
                <Link to="/company/master/brand">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.brand" /></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/company/master/category">
                <Link to="/company/master/category">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.category" /></span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/company/master/productFamily">
                <Link to="/company/master/productFamily">
                  <i className="icon icon-orders" />
                  <span><IntlMessages id="sidebar.master.family" /></span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/company/product">
              <Link to="/company/product"><i
                className="icon icon-folder-o" /><span><IntlMessages
                  id="sidebar.products" /></span></Link>
            </Menu.Item>
            <Menu.Item key="/company/stores">
              <Link to="/company/stores"><i
                className="icon icon-refer" /><span><IntlMessages
                  id="sidebar.stores" /></span></Link>
            </Menu.Item>
            <SubMenu key="settings"
          
              title={<span> <i className="icon icon-setting" />
                <span><IntlMessages id="sidebar.settings" /></span></span>}>
              <SubMenu key="accounts"
                title={<span> <i className="icon icon-setting" />
                  <span><IntlMessages id="sidebar.settings.accounts" /></span></span>}>
                <Menu.Item key="/company/settings/accounts/CompanyProfile">
                  <Link to="/company/settings/accounts/CompanyProfile"><i
                    className="icon icon-extra-components" /><span><IntlMessages
                      id="sidebar.settings.company" /></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/company/settings/accounts/userprofile">
                  <Link to="/company/settings/accounts/userprofile"><i
                    className="icon icon-extra-components" /><span><IntlMessages
                      id="sidebar.settings.user" /></span></Link>
                </Menu.Item>
                <Menu.Item key="main/changePassword">
                  <Link to="/company/settings/accounts/ChangePassword"><i
                    className="icon icon-extra-components" /><span><IntlMessages
                      id="sidebar.settings.changePassword" /></span></Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="location"
                title={<span> <i className="icon icon-setting" />
                  <span><IntlMessages id="sidebar.settings.location" /></span></span>}>
                  <Menu.Item key="main/location">
                    <Link to="/company/settings/Location/Country"><i
                      className="icon icon-extra-components" /><span><IntlMessages
                        id="sidebar.settings.country" /></span></Link>
                  </Menu.Item>
                  <Menu.Item key="main/location">
                    <Link to="/company/settings/Location/State"><i
                      className="icon icon-extra-components" /><span><IntlMessages
                        id="sidebar.settings.state" /></span></Link>
                  </Menu.Item>
                  <Menu.Item key="main/location">
                    <Link to="/company/settings/Location/City"><i
                      className="icon icon-extra-components" /><span><IntlMessages
                        id="sidebar.settings.city" /></span></Link>
                  </Menu.Item>
                  <Menu.Item key="main/location">
                    <Link to="/company/settings/Location/Area"><i
                      className="icon icon-extra-components" /><span><IntlMessages
                        id="sidebar.settings.area" /></span></Link>
                  </Menu.Item>
              </SubMenu>
              {/* <Menu.Item key="main/accounts">
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
              </Menu.Item> */}
            </SubMenu>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};




SidebarContent.propTypes = {};
export default SidebarContent;

