import React, { useState,useEffect } from 'react'
import {Pagination} from 'appConfig.json';
import { getDatas} from './action'
import { useHistory } from "react-router-dom";
import { Input, Badge, Card, Avatar, Statistic, Row, Col,Table, Button, Tooltip,Space } from 'antd';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Search = Input.Search;
const  TableView = () => {
    const history = useHistory()
    const [manufactures, setmanufactures] = useState([]);

    useEffect(() => {
        getDatas().then(result => {
            if(result.err === null){
                setmanufactures(result.res.data)
            }
        })
}, [])
    const columns = [
            {
                title: 'Manufacture Name',
                dataIndex: 'manufacture_name',
                key: 'manufacture_id',
                render: (text, record) => {
                    return <div className="gx-flex-row gx-align-items-center">
                      <img className="gx-rounded-circle gx-size-30 gx-mr-2" src={"https://via.placeholder.com/150"} alt=""/>
                      <p className="gx-mb-0">{record.manufacture_name}</p>
                    </div>
                  },
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
        history.push(`${history.location.pathname}/view/${data.manufacture_id}`)
    }
    return (
        <>
        <div className='gx-layout-sider-header' style={{
                paddingLeft: '15px',
                fontSize: '30px'
            }}>
                <h2>
                    <Link to={`${history.location.pathname}/add/`} className="gx-site-logo">
                        <ArrowLeftOutlined
                            style={{
                                marginRight: '10px'
                            }} />
                        <span>
                            Manufacture
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
           <Table className="gx-table-responsive" columns={columns} dataSource={manufactures} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} /> 
        
        </>
    )
}

export default TableView