import React,{useState,useEffect} from 'react'
import { Table, Tooltip, Space,PageHeader } from 'antd'
import { Pagination } from 'appConfig.json'
import { getDatas} from './action'
import { useHistory } from "react-router-dom";

const  View = () => {
    const history = useHistory()
    const [stores, setStores] = useState([]);

    useEffect(() => {
        getDatas().then(result => {
            console.log(result)
            if (result.err === null) {
                setStores(result.res.data)
            }
        })
    }, [])

    const columns = [
        {
            title: 'Store Name',
            dataIndex: 'store_name',
            key: 'store_id',
        },
        {
            title: 'Location ',
            dataIndex: 'billing_address',
            key: 'billing_address',
        },
        {
            title: 'City ',
            dataIndex: 'city_name',
            key: 'city_name',
        },
        {
            title: 'State ',
            dataIndex: 'state_name',
            key: 'state_name',
        },
        {
            title: 'Contact',
            dataIndex: 'mobilenumber',
            key: 'mobilenumber',
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
        history.push(`${history.location.pathname}/view/${data.store_id}`)
    }

    return (
        <>
            {/* <PageHeader className="site-page-header" title="Stores View"></PageHeader> */}
            <Table className="gx-table-responsive" columns={columns} dataSource={stores} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} /> 
        </>
    )
}

export default View
