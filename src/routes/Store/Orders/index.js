import React from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Input, Badge, Card, Avatar, Statistic, Row, Col, Button, Tooltip } from 'antd';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
const Search = Input.Search;

const Orders = () => {
    return (
        <>
            <PageHeaderWithBack title="Farmlite" subtitle="Product" islist={false} isForm={true} />
            <div className="gx-main-content-wrapper">


            </div>
        </>
    )
}

export default Orders;