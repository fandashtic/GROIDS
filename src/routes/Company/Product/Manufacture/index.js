import React, {useState,useEffect} from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col } from "antd";
import ListView from './view';
import ListForm from './form';
import {GetManufacturesAPI} from 'api/controller/Shared/ManufactureController'

const filter ={status:true}
function Manufacture() {
    const [view, setView] = useState(true);
    const [manufactures,setManufactures] = useState([]);
    const viewChanged = () => {
        setView(!view)
    }

    useEffect(() => {
        GetManufacturesAPI(filter , (data,err)=>{
            console.log(data)
            setManufactures(data)
        })
      }, [GetManufacturesAPI]);

    return (
        <div className="gx-module-box-content">
            <div className="gx-module-box-topbar">
                <Row justify="space-between">
                    <Col>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Manufacture" />}
                    </Col >
                    <Col>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/>
                                    <span>Add New Manufacture</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2" />
                                        <span>View Manufacture</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
                {view ? (<ListView  data={manufactures}/>) : <ListForm />}

        </div>
    )
}

export default Manufacture
