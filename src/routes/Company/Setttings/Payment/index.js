import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetManufacturesAPI, DeleteManufactureAPI, AddManufactureAPI } from 'api/controller/Shared/ManufactureController'

const filter = { status: true }
function paymentSetting() {
};
export default paymentSetting
