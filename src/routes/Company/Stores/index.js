import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Row, Col, Button, Card, Divider, message } from 'antd'
import ListView from './view'
import FormView from './form'
import { GetStoresAPI, DeleteStoreAPI, AddStoreAPI } from 'api/controller/Shared/StoreController';

let filter = { status: true }

const Index = () => {
    const [view, setView] = useState(true);
    const [stores, setStores] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const apiInit = () => {
        GetStoresAPI(filter, (res, err) => {
            setStores(res.data)
            setsearchItem(res.data)
        })
    }

    const viewChanged = () => {
        setView(!view)
    }
    useEffect(() => {
        apiInit()
    }, [view])

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = stores.filter((el) => el.store_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }

    const deletedData = (id) => {
        DeleteStoreAPI(id, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    const addData = data => {
        AddStoreAPI(data, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    return (
        <Card title="Stores">
            <div className="components-table-demo-control-bar">
                <Row justify="space-between">
                    <Col>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Store" value={searchValue} onChange={handleChange} />}
                    </Col >
                    <Col>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add gx-mr-2" />
                                    <span>Add New Store</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2" />
                                        <span>View Store</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            <Divider></Divider><br></br>
            {view ? <ListView stores={searchItem} deletedData={deletedData} /> : <FormView addData={addData} />}
        </Card>
    )


}
export default Index
