import React, { useEffect,useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col,message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProductCategorysAPI,DeleteProductCategoryAPI,AddProductCategoryAPI } from 'api/controller/Shared/ProductCategoryController'

let filter = { status: true }

function companySetting() {
    
};

export default companySetting