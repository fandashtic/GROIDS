import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Main from "../main/dashboard/Company";

import Product from "../Company/Product"
import Brand from "../Company/Product/Brand"
import Category from "../Company/Product/Category";
import Manufacture from "../Company/Product/Manufacture";
import ProductFamily from "../Company/Product/ProductFamily";
import Stores from "../Company/Stores"
import Settings from "../Company/Settings"
import UnitTest from "../UnitTest"

const App = ({ match }) => {
    return (<div className="gx-main-content-wrapper">
        <Switch>
            <Redirect exact from={`${match.path}`} to={`${match.url}/dashboard`} />
            <Route path={`${match.path}dashboard`} component={Main}/>
            <Route path={`${match.path}product/`} component={Product}/>
            <Route path={`${match.path}master/brand`} component={Brand}/>
            <Route path={`${match.path}master/category`} component={Category}/>
            <Route path={`${match.path}master/manufacture`} component={Manufacture}/>
            <Route path={`${match.path}master/productFamily`} component={ProductFamily}/>
            <Route path={`${match.path}stores`} component={Stores} />
            <Route path={`${match.path}settings`} component={Settings} />
            {/* <Route exact path={`${match.url}/accounts/CompanyProfile`} component={CompanyProfile} />
            <Route exact path={`${match.url}/accounts/UserProfile`} component={UserProfile} /> */}
            <Route path={`${match.path}unittest`} component={UnitTest} />
        </Switch>
    </div>)
}
    ;

export default App;
