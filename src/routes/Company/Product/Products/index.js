import React, { Component } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Card, Table, Button } from "antd";
import ProductFrom from "components/modal/Products/Product"

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];
class Index extends Component {
    state = {
        modal: false,

    }
    updateContactUser = () => {
    }
    onAddProduct = e => {
        this.setState({ modal: true })
    }
    onClose = e => {
        this.setState({ modal: false })
    }
    render() {
        const { modal } = this.state
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];


        return (
            <>
                <div className="gx-module-box-header row">
                    <AppModuleHeader placeholder="Search Products"
                        onChange={this.updateContactUser()}
                    />
                </div>
                <div className="gx-module-box-content">
                    <div className="gx-module-box-topbar" style={{ "alignSelf": "flex-end" }}>
                        <Button className="ant-btn gx-right" type="primary" aria-label="add"
                            onClick={this.onAddProduct}>
                            <i className="icon icon-add gx-mr-2" />
                            <span>Add New Product</span>
                        </Button>
                    </div>
                    <Card>
                        <Table className="gx-table-responsive" columns={columns} dataSource={data} onChange={this.handleChange} />
                    </Card>
                </div>
                <ProductFrom open={modal} onClose={this.onClose}></ProductFrom>
            </>
        )
    }
}

export default Index