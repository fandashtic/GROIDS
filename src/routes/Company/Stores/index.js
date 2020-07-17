import React, { Component } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Row, Col, Button, Card, Divider } from 'antd'
import ListView from './view'
import FormView from './form'
class Index extends Component {
    state = {
        view: true
    }

    updateContactUser = () => {
    }
    viewChanged = () => {
        this.setState({ view: !this.state.view })
    }
    render() {
        const { view } = this.state
        return (
            <Card title="Stores">
                <div className="components-table-demo-control-bar">
                    <Row justify="space-between">
                        <Col>
                            <></>
                            {view && <AppModuleHeader placeholder="Search Brand" />}
                        </Col >
                        <Col>
                            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={this.viewChanged}>
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
                {view ? <ListView /> : <FormView />}
            </Card>
        )
    }
}

export default Index