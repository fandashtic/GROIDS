import React from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Input, Badge, Card, Avatar, Statistic, Row, Col, Button, Tooltip } from 'antd';
const Search = Input.Search;

const Orders = () => {
    return (
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
    )
}

export default Orders;