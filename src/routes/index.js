import React from "react";
import {Route, Switch} from "react-router-dom";

const App = ({match}) => (
    <div className="gx-main-content-wrapper">
      <Switch>
        {/* <Route path={`${match.url}main`} component={Main}/>
        <Route path={`${match.url}components`} component={Components}/>
        <Route path={`${match.url}custom-views`} component={CustomViews}/>
        <Route path={`${match.url}extensions`} component={Extensions}/>
        <Route path={`${match.url}extra-components`} component={ExtraComponents}/>
        <Route path={`${match.url}in-built-apps`} component={InBuiltApps}/>
        <Route path={`${match.url}social-apps`} component={SocialApps}/>
        <Route path={`${match.url}documents`} component={Documents}/> */}
      </Switch>
    </div>
  );
  
  export default App;