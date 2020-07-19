import React from "react";

const AppModuleHeader = (props) => {

    const {placeholder, onChange, value} = props;

    return (
      <div className="gx-module-box-header-inner">
        <div
          className="gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-sm-block">
          <div className="gx-form-group">
            <input className="ant-input gx-border-1" type="search" placeholder={placeholder}
                   onChange={onChange}
                   value={value}/> <i className="icon icon-search-new gx-mr-2" />
          </div>
        </div>
      </div>
    )
};

export default AppModuleHeader;

AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true
};
