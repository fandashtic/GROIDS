import React from "react";
import {useHistory} from 'react-router-dom';
import { LoginOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const AppsNavigation = () => {
  let history = useHistory()
  return (
  <ul className="gx-app-nav">
    <Tooltip placement="top" title="Notification"><li><i className="icon icon-notification"/></li></Tooltip>
    <Tooltip placement="top" title="Profile"><li><i className="icon icon-wall"/></li></Tooltip>
    <Tooltip placement="top" title="Logout"><li onClick={()=> { history.push('/')}}><LoginOutlined style={{color: "#E54E4E", cursor: "pointer", fontSize: "20px", position: "relative", top: "-2px"}} /></li></Tooltip>
  </ul>)
  }

export default AppsNavigation;
