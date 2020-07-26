import React, {Component} from "react";
import {Drawer, message} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import IntlMessages from "util/IntlMessages";
import accountSetting from "./Accounts";
import companySetting from "./Company";
import locationSetting from "./Location";
import paymentSetting from "./Payment";
import storeSetting from "./Store";

const filterOptions = [
  {
    id: 1,
    name: 'Accounts',
    icon: 'star'
  }, {
    id: 2,
    name: 'Company',
    icon: 'star'

  }, {

    id: 3,
    name: 'Location',
    icon: 'star'
  
  }, {

    id: 4,
    name: 'Payment',
    icon: 'star'
  
  },
  {

    id: 5,
    name: 'Store',
    icon: 'star'
  
  },

];

class setting extends Component {
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
      case 'Accounts': {
        this.optionIds(option)
        break;
      }
      case 'Company': {
        this.optionIds(option)
        break;
      }
      case 'Location': {
        this.optionIds(option)
        break;
      }
      case 'Payment': {
        this.optionIds(option)
        break;
      }
      case 'Store': {
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
        menuName:'Accounts',
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
                menuName === 'Accounts' ? (<accountSetting/>):
                menuName === 'Company' ? (<companySetting/>) :
                menuName === 'Location' ?(<locationSetting/>) : 
                menuName === 'Payment' ? (<paymentSetting/>) :
                menuName === 'setting' ? (<storeSetting/>) : ''
            }
          </div>
        </div>
        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default setting;
