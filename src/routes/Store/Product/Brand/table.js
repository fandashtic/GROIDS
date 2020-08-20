
import React, { useState, useEffect } from 'react'
import { Input, Badge, Card, Avatar, Statistic, Row, Col, Table, Button, Tooltip, Space } from 'antd';
import { Pagination } from 'appConfig.json';
import { getBrands } from './action'
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import PageHeaderWithSearchNoBack from 'components/PageHeaderWithSearchNoBack';
import { AddButton } from 'components/RouteButton';

const Search = Input.Search;

const TableView = () => {
    const history = useHistory()
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getBrands().then(result => {
            console.log(result)
            if (result.err === null) {
                setBrands(result.res.data)
            }
        })
    }, [])

    const columns = [
        {
            title: 'Brand Name',
            dataIndex: 'brand_name',
            key: 'brand_id',
        },
        {
            title: 'Manufacture Name',
            dataIndex: 'manufacture_name',
            key: 'manufacture_id',
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
        history.push(`${history.location.pathname}/view/${data.brand_id}`)
    }

    return (
        <>
            <PageHeaderWithSearchNoBack title="Brand" subtitle="Product" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper">
                <Col span={24}>
                    <AddButton />
                    <Table className="gx-table-responsive" columns={columns} dataSource={brands} pagination={{ pageSize: Pagination }}
                        scroll={{ y: 240 }} />
                </Col>
            </Row>
        </>
    )
}

export default TableView