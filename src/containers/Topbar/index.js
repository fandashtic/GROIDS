import React,{useContext} from "react";
import {Layout, Popover,Avatar} from "antd";
import {Link,useHistory} from "react-router-dom";
import { toggleCollapsedSideNav} from "appRedux/actions/Template";
import Context from "appRedux/context";

import {NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE} from "constants/ThemeSetting";

const {Header} = Layout;
const Topbar = () => {
  const { state ,dispatch} = useContext(Context);
  const {width,navCollapsed,navStyle} = state 
  const history = useHistory();
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li className="gx-media gx-pointer"> 
      <i className={`gx-mr-2  icon icon-components`}/>
      <span className="gx-language-text">My Account</span></li>
      <li className="gx-media gx-pointer"> 
      <i className={`gx-mr-2  icon icon-culture-calendar`}/>
      <span className="gx-language-text">Connections</span></li>
      <li className="gx-media gx-pointer"  onClick={() => history.push('/') }> 
      <i className={`gx-mr-2 icon icon-chevron-left`}/>
      <span className="gx-language-text">Logout</span></li>
    </ul>
  );
  return (
    <Header>
      {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
        <div className="gx-linebar gx-mr-3">
          <i className="gx-icon-btn icon icon-menu"
             onClick={() => {
               dispatch(toggleCollapsedSideNav(!navCollapsed,dispatch));
             }}
          />
        </div> : null}
      <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img alt="" src={require("assets/images/w-logo.png")}/></Link>
      <ul className="gx-header-notifications gx-ml-auto">
        <li className="gx-language">
          <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
                   trigger="click">
                <Avatar src={"https://via.placeholder.com/150"}
                className="gx-size-40 gx-pointer gx-mr-3" alt=""/>
        <span className="gx-avatar-name">admin<i className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
          </Popover>
        </li>
      </ul>
    </Header>
  );
};

export default Topbar;
