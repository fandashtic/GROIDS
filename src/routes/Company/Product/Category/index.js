import React, { Component } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, Card } from "antd";
import ListView from './view';
import ListForm from './form';
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
                            {view && <AppModuleHeader placeholder="Search Category" />}
                        </Col >
                        <Col>
                            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={this.viewChanged}>
                                {view ? (
                                    <><i className="icon icon-add gx-mr-2" />
                                        <span>Add New Category</span></>) : (
                                        <>
                                            <i className="icon icon-eye gx-mr-2" />
                                            <span>View Category</span></>)
                                }
                            </Button>
                        </Col>
                    </Row>
                </div>
                    {view ? (<ListView />) : <ListForm />}

            </div>
        )
    }
}

export default Index