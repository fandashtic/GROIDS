import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import UserProfileSettingForm from './form';
import { GetProductCategorys, DeleteProductCategory, AddProductCategory } from 'api/Shared/Master/ProductCategoryController'

let filter = { status: true }

function UserprofileSetting () {
    return (
        <div className="gx-module-box-content">
        <UserProfileSettingForm/>
        </div>
    )

};

export default UserprofileSetting ;