import React from "react";
import {useHistory} from 'react-router-dom';
import { LoginOutlined } from "@ant-design/icons";

const AppsNavigation = () => {
  let history = useHistory()
  return (
  <ul className="gx-app-nav">
    <li><i className="icon icon-notification"/></li>
    <li><i className="icon icon-wall"/></li>
    <li onClick={()=> { history.push('/')}}><LoginOutlined /></li>
  </ul>)
  }

export default AppsNavigation;
