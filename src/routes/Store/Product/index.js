import React from "react";
import { Route, Switch } from "react-router-dom";
import Brands from './Brand'
import Products from './Products';
import Categories from './Category';
import Manufactures from './Manufacture'
import ProductFamilies from './ProductFamily'
const Index = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}`} component={Products} />
      <Route path={`${match.path}brands`} component={Brands} />
      <Route path={`${match.path}categories`} component={Categories} />
      <Route path={`${match.path}manufactures`} component={Manufactures} />
      <Route path={`${match.path}productFamilies`} component={ProductFamilies} />
    </Switch>
  )
};

export default Index;
