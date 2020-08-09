import React, {Component} from "react";
import {Drawer, message} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import {Route, Switch} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import CompanySetting from "./CompanyProfile";
import AreaSetting from "./Area";
import CitySetting from './City'; 
import StateSetting from './State';
import CountrySetting from './Country'
import PaymentSetting from "./Payment";
import UserprofileSetting from "./UserProfile";
import ChangePasswordSetting from "./ChangePassword";

const filterOptions = [
   {
    id: 1,
    name: 'CompanyProfile',
    icon: 'star'

  }, {

    id: 2,
    name: 'Area',
    icon: 'star'
  
  }, 
  {

    id: 3,
    name: 'City',
    icon: 'star'
  
  },
  {

    id: 4,
    name: 'State',
    icon: 'star'
  
  },
  {

    id: 5,
    name: 'Country',
    icon: 'star'
  
  },
  
  // {

  //   id: 6,
  //   name: 'Payment',
  //   icon: 'star'
  
  // },
  
  {

    id: 8,
    name: 'UserProfile',
    icon: 'star'
  
  },
  {

    id: 9,
    name: 'ChangePassword',
    icon: 'star'
  
  },
  
];

class Settings extends Component {
  ContactSideBar = () => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-folder gx-mr-4"/>
          <span>{this.state.menuName}</span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    <i className={`icon icon-${option.icon}`}/>
                    <span>{option.name}</span>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  optionIds = (option) =>{
    this.setState({
        selectedSectionId: option.id,
        menuName:option.name
      });
  }

  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'CompanyProfile': {
        this.optionIds(option)
        break;
      }
      case 'Area': {
        this.optionIds(option)
        break;
      }
      case 'City': {
        this.optionIds(option)
        break;
      }
      case 'State': {
        this.optionIds(option)
        break;
      }
      case 'Country': {
        this.optionIds(option)
        break;
      }

      // case 'Payment': {
      //   this.optionIds(option)
      //   break;
      // }
     
      case 'UserProfile': {
        this.optionIds(option)
        break;
      }
      case 'ChangePassword': {
        this.optionIds(option)
        break;
      }
      default:
        break;
    }

  };
  constructor() {
    super();
    this.state = {
        alertMessage: '',
        showMessage: false,
        selectedSectionId: 1,
        drawerState: false,
        searchUser: '',
        menuName:'CompanyProfile',
        optionid:'4'
    }
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const { menuName, drawerState,  alertMessage, showMessage} = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            {<Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>}
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar()}
          </div>
          <div className="gx-module-box">
          <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>
            {
                menuName === 'CompanyProfile' ? (<CompanySetting/>) :
                menuName === 'Area' ?(<AreaSetting/>) : 
                menuName === 'City' ?(<CitySetting/>) :
                menuName === 'State' ?(<StateSetting/>) :
                menuName === 'Country' ?(<CountrySetting/>) :
               // menuName === 'Payment' ? (<PaymentSetting/>) :
                menuName === 'UserProfile' ? (<UserprofileSetting/>) :
                menuName === 'ChangePassword' ? (<ChangePasswordSetting/>) :''
            }
          </div>
        </div>
        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default Settings;
