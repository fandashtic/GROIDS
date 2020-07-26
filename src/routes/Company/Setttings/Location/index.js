import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProducts, DeleteProduct, AddProduct } from 'api/Shared/Master/ProductController'

let filter = { status: true }

function locationSetting() {
    };

export default locationSetting