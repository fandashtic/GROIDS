import React, {Component} from "react";
import {Button, Drawer, message} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import IntlMessages from "util/IntlMessages";
import Brand from "./Brand";
import Products from "./Products";
import Category from "./Category";
import Manufacture from "./Manufacture";
import ProductFamily from "./ProductFamily";

const filterOptions = [
  {
    id: 1,
    name: 'Products',
    icon: 'all-contacts'
  }, {
    id: 2,
    name: 'Manufacture',
    icon: 'frequent'

  }, {

    id: 3,
    name: 'Brand',
    icon: 'star'
  
  }, {

    id: 4,
    name: 'Category',
    icon: 'star'
  
  },
  {

    id: 5,
    name: 'Product Family',
    icon: 'star'
  
  },

];

class Product extends Component {
  ContactSideBar = () => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-folder gx-mr-4"/>
          <span><IntlMessages id="sidebar.products"/></span>
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
      case 'Brand': {
        this.optionIds(option)
        break;
      }
      case 'Category': {
        this.optionIds(option)
        break;
      }
      case 'Manufacture': {
        this.optionIds(option)
        break;
      }
      case 'Products': {
        this.optionIds(option)
        break;
      }
      case 'Product Family': {
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
        menuName:'Products',
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
                menuName === 'Brand' ? (<Brand/>):
                menuName === 'Products' ? (<Products/>) :
                menuName === 'Category' ?(<Category/>) : 
                menuName === 'Manufacture' ? (<Manufacture/>) :
                menuName === 'Product Family' ? (<ProductFamily/>) : ''
            }
          </div>
        </div>
        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default Product;
