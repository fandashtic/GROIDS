import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetManufacturesAPI, DeleteManufactureAPI, AddManufactureAPI } from 'api/controller/Shared/ManufactureController'

const filter = { status: true }
function Manufacture() {
    const [view, setView] = useState(true);
    const [manufactures, setManufactures] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const viewChanged = () => {
        setView(!view)
    }


    const apiInit = () => {
        GetManufacturesAPI(filter, (res, err) => {
            setManufactures(res.data)
            setsearchItem(res.data)
        })
    }

    useEffect(() => {
        apiInit()
    }, [view]);

    // const editableData = (data) => {
    //     setView(false)
    //     setEditData(data)
    // }

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = manufactures.filter((el) => el.manufacture_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }


    const deletedData = (id) => {
        DeleteManufactureAPI(id, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    const addData = data => {
        AddManufactureAPI(data, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }

    return (
        <div className="gx-module-box-content">
            <div className="gx-module-box-topbar">
                <Row gutter={16} style={{width: "100%"}}>
                    <Col md={17} sm={16}>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Manufacture" value={searchValue} onChange={handleChange} />}
                    </Col>
                    <Col md={7} sm={8}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />&nbsp;
                                    <span>Add New Manufacture</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View Manufactures</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<ListView manufactures={searchItem} deletedData={deletedData} />) : <ListForm addData ={addData} />}

        </div>
    )
}

export default Manufacture
