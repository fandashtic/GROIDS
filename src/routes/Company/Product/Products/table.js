import React, { useState ,useEffect} from 'react'
import { Table, Tooltip, Space} from "antd";

import { Pagination } from 'appConfig.json'
import { getDatas} from './action'
import { useHistory } from "react-router-dom";

const TableView = () => {
    const history = useHistory()
    const [product, setproduct] = useState([]);

    useEffect(() => {
        getDatas().then(result => {
            console.log(result)
            if (result.err === null) {
                setproduct(result.res.data)
            }
        })
    }, [])
    const columns = [
        {
            title: 'Product Image',
            dataIndex: 'product_image',
            key: 'product_image',
            render: (text, record) => {
                return <div className="gx-flex-row gx-align-items-center">
                    <img className="gx-rounded-circle gx-size-30 gx-mr-2" src={"https://via.placeholder.com/150"} alt="" />
                </div>
            },
        },
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_id',
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
            title: 'Family',
            dataIndex: 'product_family_name',
            key: 'product_Family_id',
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
        history.push(`${history.location.pathname}/edit/${data.product_id}`)
    }
    return (
        <>
            <Table className="gx-table-responsive" columns={columns} dataSource={product} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} /> 
        </>
    )
}

export default TableView

