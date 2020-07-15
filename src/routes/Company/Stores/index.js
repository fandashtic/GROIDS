import React, {Component} from "react";
import AppModuleHeader from "components/AppModuleHeader/index";

class Index extends Component {
    updateContactUser = () => {

    }
render(){
    return(
        <>
            <div className="gx-module-box-header">
            <AppModuleHeader placeholder="Search brand" notification={false} apps={false}
              onChange={this.updateContactUser()}
              />
            </div>
            
            <div className="gx-module-box-content">
               Store
            </div>
        </>
    )
}
}

export default Index