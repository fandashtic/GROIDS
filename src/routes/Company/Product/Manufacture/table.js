import React, { useState,useEffect } from 'react'
import {Pagination} from 'appConfig.json';
import { getDatas} from './action'
import { useHistory } from "react-router-dom";
import {  Row, Col,Table,  Tooltip,Space } from 'antd';
import PageHeaderWithSearchNoBack from 'components/PageHeaderWithSearchNoBack';
import {AddButton} from 'components/RouteButton'; 

const  TableView = () => {
    const history = useHistory()
    const [manufactures, setmanufactures] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getDatas().then(result => {
            if(result.err === null){
                setmanufactures(result.res.data)
                setloading(false)
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
                    <AddButton/>
                    <Table className="gx-table-responsive" columns={columns} loading={loading} dataSource={manufactures} pagination={{ pageSize: Pagination }}
                        scroll={{ y: 240 }} />
                </Col>
            </Row>

        </>
    )
}

export default TableView