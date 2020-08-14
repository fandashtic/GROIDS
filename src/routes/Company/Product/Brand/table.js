
import React, { useState, useEffect } from 'react'
import { Input, Badge, Card, Avatar, Statistic, Row, Col, Table, Button, Tooltip, Space } from 'antd';
import { Pagination } from 'appConfig.json';
import { getBrands } from './action'
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

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
            <div className='gx-layout-sider-header' style={{
                paddingLeft: '15px',
                fontSize: '30px'
            }}>
                <h2>
                    <Link to="/" className="gx-site-logo">
                        <ArrowLeftOutlined
                            style={{
                                marginRight: '10px'
                            }} />
                        <span>
                            Products
                    </span>
                    </Link>
                </h2>
                <Badge className='ant-badge'
                    style={{
                        backgroundColor: '#34b880',
                        position: 'relative',
                        top: '20px',
                        left: '-80px'
                    }} count={'subtitle'}>
                </Badge>

                <Search placeholder="What you like..."
                    style={{
                        width: '50%',
                        position: 'absolute',
                        top: '18px',
                        left: '240px'
                    }}
                    enterButton="Search Product" size="medium" />

                <Button type="primary" shape="circle" style={{
                    top: '7px'
                }}>
                    New
            </Button>
            </div>
            <Table className="gx-table-responsive" columns={columns} dataSource={brands} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} />
        </>
    )
}

export default TableView