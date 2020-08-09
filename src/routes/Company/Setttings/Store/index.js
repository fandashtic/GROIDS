import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import StoreSettingView from './view';
import StoreSettingForm from './form';
import { GetProductFamilies, DeleteProductFamily, AddProductFamily } from 'api/Shared/Master/ProductFamilyController'

let filter = { status: true }

function StoreSetting() {
    const [view, setView] = useState(true);
    
    
    const viewChanged = () => {
        setView(!view)
    }


    return (
        <div className="gx-module-box-content">
            <div className="gx-module-box-topbar">
                <Row gutter={16} style={{ width: "100%" }}>
                    
                    <Col md={4} sm={5}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>&nbsp;Add New</span></>) : (
                                    <>
                                        <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View All</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? <StoreSettingView /> : <StoreSettingForm />}
        </div>
    )
};


export default StoreSetting
