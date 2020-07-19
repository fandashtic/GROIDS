import React, { Component } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Row, Col, Button, Card, Divider } from 'antd'
import ListView from './view'
import FormView from './form'
import { GetStoresAPI } from 'api/Controller/Store/StoreController'

class Index extends Component {
    state = {
        view: true,
        eventvalue: "",
        storeList: [],
        copyStoreList:[]
    }

    updateContactUser = () => {
    }
    viewChanged = () => {
        this.setState({ view: !this.state.view })
    }
    handleChange = (event) => {
        event.persist();
        this.setState({ eventvalue: event.target.value })
        let dataList =  this.state.storeList.filter((el) =>
        el.store_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        console.log("data - ",dataList.length, "state -",this.state.storeList.length )
        this.setState({ copyStoreList: dataList })
       // let dataList =  this.state.storeList.filter((el) =>
         //  el.store_name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1)
           //  console.log("data - ",dataList.length, "state -",this.state.storeList.length )
             //this.setState({ storeList: dataList })
    }
    componentDidMount() {

        GetStoresAPI({ status: true }, (res, err) => {
            this.setState({ storeList: res.data, copyStoreList:res.data })
        })
    }

    render() {
        const { view } = this.state
        return (
            <Card title="Stores">
                <div className="components-table-demo-control-bar">
                    <Row justify="space-between">
                        <Col>
                            <></>
                            {view && <AppModuleHeader placeholder="Search Stores" value={this.state.eventvalue} onChange={this.handleChange} />}
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

                {view ? <ListView storeList={this.state.copyStoreList} /> : <FormView />}
            </Card>
        )
    }
}

export default Index