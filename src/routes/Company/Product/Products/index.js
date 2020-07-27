import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProducts, DeleteProduct, AddProduct } from 'api/Shared/Master/ProductController'

let filter = { status: true }

function Products() {
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [product, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const apiInit = () => {
        GetProducts(filter, (res, err) => {
            setProducts(res.data)
            setsearchItem(res.data)
        })
    }
    const viewChanged = () => {
        setView(!view)
    }

    const editableData = (data) => {
        setView(false)
        setEditData(data)
    }

    useEffect(() => {
        apiInit()
    }, [])

    const addData = data => {
        AddProduct(data, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = product.filter((el) => el.product_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }

    const deletedData = (id) => {
        DeleteProduct(id, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }

    return (
        <div className="gx-module-box-content">
            <div className="gx-module-box-topbar">
                <Row gutter={16} style={{ width: "100%" }}>
                    <Col md={20} sm={19}>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Products" value={searchValue} onChange={handleChange} />}
                    </Col>
                    <Col md={4} sm={5}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>Add New</span></>) : (
                                    <>
                                        <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View All</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<ListView editableData={editableData} deletedData={deletedData} product={searchItem} />) : <ListForm addData={addData} editableDataToForm={editData} />}
        </div>
    )
};

export default Products