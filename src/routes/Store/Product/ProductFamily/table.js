import React, { useState, useEffect } from 'react'
import { Input, Badge, Card, Avatar, Statistic, Row, Col, Table, Button, Tooltip, Space } from 'antd';
import { Pagination } from 'appConfig.json'
import { getDatas } from './action'
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import PageHeaderWithSearchNoBack from 'components/PageHeaderWithSearchNoBack';
import { AddButton } from 'components/RouteButton';

const Search = Input.Search;
const View = () => {
    const history = useHistory()
    const [family, setfamily] = useState([]);

    useEffect(() => {
        getDatas().then(result => {
            console.log(result)
            if (result.err === null) {
                setfamily(result.res.data)
            }
        })
    }, [])

    const columns = [
        {
            title: 'Family Name',
            dataIndex: 'product_family_name',
            key: 'product_family_id',
        },
        {
            title: 'Manufacture',
            dataIndex: 'manufacture_name',
            key: 'manufacture_id',
        },
        {
            title: 'Brand',
            dataIndex: 'brand_name',
            key: 'brand_id',
        },
        {
            title: 'Category',
            dataIndex: 'product_category_name',
            key: 'product_category_id',
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
        history.push(`${history.location.pathname}/edit/${data.product_category_id}`)
    }


    return (
        <>
            <PageHeaderWithSearchNoBack title="Family" subtitle="Product" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper">
                <Col span={24}>
                    <AddButton />
                    <Table className="gx-table-responsive" columns={columns} dataSource={family} pagination={{ pageSize: Pagination }}
                        scroll={{ y: 240 }} />
                </Col>
            </Row>

        </>
    )
}

export default View
