import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Input, Badge, Card, List, Avatar, Statistic, Row, Col, Button, Tooltip } from 'antd';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
import { GetOrders } from 'api/Store/OrderController';
import { GetImage } from 'api/Shared/Util';
const Search = Input.Search;

const Orders = () => {

    const [orders, setOrders] = useState(null);

    let filter = {
        'status': true
    }

    useEffect(() => {
        GetOrders(filter, (res, err) => {
            console.log(res, err);
            if (res.Status === 200) {
                setOrders(res.data);
            }
        });
    }, [orders]);

    return (
        <>
            <PageHeaderWithBack title="My Orders" subtitle="Order" />
            <div className="gx-main-content-wrapper">
                {orders ?
                    <List
                        itemLayout="horizontal"
                        dataSource={orders}
                        renderItem={order => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={GetImage(order.profile_image_url)} />}
                                    title={<a>{order.store_name}</a>}
                                    description={order.status + ' | ' + order.created_on}
                                />
                            </List.Item>
                        )}
                    />
                    : null}
            </div>
        </>
    )
}

export default Orders;