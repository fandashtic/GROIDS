import React, { useState, useEffect } from 'react'
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
const Search = Input.Search;
const { Meta } = Card;

const ProductList = () => {
    return (
        <>
            <PageHeaderWithBack title="Farmlite" subtitle="Product" islist={true} isadd={false} />
            <Search placeholder="What you like..."
                style={{
                    width: '50%',
                    position: 'absolute',
                    top: '30px',
                    right: '80px'
                }}
                enterButton="Search Product" size="large" />

            <Row>
                <Col flex={2}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="Formolite"
                                src="https://firebasestorage.googleapis.com/v0/b/grodis-d88d3.appspot.com/o/PR%2Fformolite.jpg?alt=media&token=2650f548-0f86-4d60-9c60-ec2347644e6c"
                            />
                        }
                        actions={[
                            <Avatar
                                shape="square" size={32}
                                src="https://firebasestorage.googleapis.com/v0/b/grodis-d88d3.appspot.com/o/PR%2FITC.jpg?alt=media&token=f8a172cb-6408-4d09-8953-c7dcbe032aa8" />,
                            <EditOutlined key="edit" style={{
                                fontSize: '30px'
                            }} />,
                        ]}
                    >

                        <Meta title="Farmlite" description="Sunfeast" />

                    </Card>
                </Col>
                <Col flex={3}>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined style={{ color: 'blue' }} />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Available Stores" value={108} prefix={<ApartmentOutlined />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Happy Consumers" value={1085} prefix={<SmileTwoTone />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Favorite Consumers" value={1085} prefix={<HeartTwoTone twoToneColor="#eb2f96" woTone />} />
                        </Col>
                    </Row>

                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Button type="danger" icon={<DeleteOutlined twoToneColor="red" />} size='large'>
                                Remove
                            </Button>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </>
    )
}

export default ProductList;
