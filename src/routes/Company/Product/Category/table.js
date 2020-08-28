import React, { useState,useEffect } from 'react'
import {  Row, Col, Table, Tooltip, Space } from 'antd';
import { getDatas} from './action';
import { useHistory } from "react-router-dom";
import {Pagination} from 'appConfig.json';
import PageHeaderWithSearchNoBack from 'components/PageHeaderWithSearchNoBack';
import { AddButton } from 'components/RouteButton';

const  TableView = () => {
    const [category, setCategory] = useState([]);
    const history = useHistory()
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getDatas().then(result => {
            console.log(result)
            if(result.err === null){
                setCategory(result.res.data)
                setloading(false)
            }
        })
}, [])
    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'product_category_name',
            key: 'product_category_id',
        },
        {
            title: 'Manufacture Name',
            dataIndex: 'manufacture_name',
            key: 'manufacture_id',
        },
        {
            title: 'Brand',
            dataIndex: 'brand_name',
            key: 'brand_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text) => {
                return (
                    <Space size="middle">
                        <Tooltip title="View">
                            <span className="gx-text-info gx-pointer" onClick={() => onViewPanel(text)}>
                                <i className="icon icon-forward gx-fs-xl gx-mr-2" />
                            </span>
                        </Tooltip>
                    </Space>
                )
            },
        },
    ];

    const onViewPanel = data => {
        history.push(`${history.location.pathname}/view/${data.product_category_id}`)
    }


    return (
        <>
            <PageHeaderWithSearchNoBack title="Category" subtitle="Product" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper">
                <Col span={24}>
                    <AddButton/>
                    <Table className="gx-table-responsive" columns={columns} dataSource={category} loading={loading} pagination={{ pageSize: Pagination }}
                        scroll={{ y: 240 }} />
                </Col>
            </Row>
        </>
    )
}

export default TableView
