import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProductsAPI, DeleteProductAPI, AddProductAPI } from 'api/controller/Shared/ProductController'

let filter = { status: true }

function locationSetting() {
    };

export default locationSetting