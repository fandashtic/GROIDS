import React, { Component } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, Card } from "antd";
import ListView from './ProductList';
import ListForm from './ProductForm';
import CustomScrollbars from "util/CustomScrollbars";

class Index extends Component {
    state = {
        view: true,
    }
    viewChanged = () => {
        this.setState({ view: !this.state.view })
    }
    render() {
        const { view } = this.state
        return (
            <div className="gx-module-box-content">
                <div className="gx-module-box-topbar">
                    <Row justify="space-between">
                        <Col>
                            <></>
                            {view && <AppModuleHeader placeholder="Search Product" />}
                        </Col >
                        <Col>
                            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={this.viewChanged}>
                                {view ? (
                                    <><i className="icon icon-eye gx-mr-2" />
                                        <span>View Product</span></>) : (
                                        <>
                                            <i className="icon icon-add gx-mr-2" />
                                            <span>Add New Product</span></>)
                                }
                            </Button>
                        </Col>
                    </Row>
                </div>
                <Card>
                    {view ? (<ListView />) : <ListForm />}
                </Card>

            </div>
        )
    }
}

export default Index