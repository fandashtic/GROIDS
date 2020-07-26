import React, { useEffect,useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col,message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProductFamiliesAPI ,DeleteProductFamilyAPI,AddProductFamilyAPI} from 'api/controller/Shared/ProductFamilyController'

let filter = { status: true }

function storeSetting() {
};

export default storeSetting