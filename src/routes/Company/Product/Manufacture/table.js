import React, { useState,useEffect } from 'react'
import {Pagination} from 'appConfig.json';
import { getDatas} from './action'
import { useHistory } from "react-router-dom";
import { Input, Badge, Card, Avatar, Statistic, Row, Col,Table, Button, Tooltip,Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import PageHeaderWithSearchNoBack from 'components/PageHeaderWithSearchNoBack';
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
            <PageHeaderWithSearchNoBack title="Manufacture" subtitle="Product" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper">
                <Col span={24}>
                    <Table className="gx-table-responsive" columns={columns} dataSource={manufactures} pagination={{ pageSize: Pagination }}
                        scroll={{ y: 240 }} />
                </Col>
            </Row>

        </>
    )
}

export default TableView