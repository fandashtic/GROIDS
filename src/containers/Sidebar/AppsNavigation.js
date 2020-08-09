import React from "react";
import {useHistory} from 'react-router-dom';

const AppsNavigation = () => {
  let history = useHistory()
  return (
  <ul className="gx-app-nav">
    <li><i className="icon icon-notification"/></li>
    <li><i className="icon icon-wall"/></li>
    <li className="signout" onClick={()=> { history.push('/')}}><i className="icon icon-signin"/></li>
  </ul>)
  }

export default AppsNavigation;
