import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Dashboard from "./Dashboard";

import Product from "./Product/Products"
import Brand from "./Product/Brand"
import Category from "./Product/Category";
import Manufacture from "./Product/Manufacture";
import ProductFamily from "./Product/ProductFamily";
import Stores from "./Stores"
import Settings from "./Settings"

const App = ({ match }) => {
    return (<div>
        <Switch>
            <Redirect exact from={`${match.path}`} to={`${match.url}/dashboard`} />
            <Route path={`${match.path}dashboard`} component={Dashboard}/>
            <Route path={`${match.path}product/`} component={Product}/>
            <Route path={`${match.path}master/brand`} component={Brand}/>
            <Route path={`${match.path}master/category`} component={Category}/>
            <Route path={`${match.path}master/manufacture`} component={Manufacture}/>
            <Route path={`${match.path}master/productFamily`} component={ProductFamily}/>
            <Route path={`${match.path}stores`} component={Stores} />
            <Route path={`${match.path}settings`} component={Settings} />
            {/* <Route exact path={`${match.url}/accounts/CompanyProfile`} component={CompanyProfile} />
            <Route exact path={`${match.url}/accounts/UserProfile`} component={UserProfile} /> */}
            {/* <Route path={`${match.path}unittest`} component={UnitTest} /> */}
        </Switch>
    </div>)
}
    ;

export default App;