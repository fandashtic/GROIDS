import React,{useContext} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Context from "appRedux/context";
import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {
  THEME_TYPE_LITE
} from "constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";

const SidebarContent = () => {
  const { state } = useContext(Context);
  const {themeType, pathname} = state

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
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

