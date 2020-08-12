import React, { useEffect, useState } from 'react'
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, EditOutlined } from '@ant-design/icons';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
import { useHistory } from "react-router-dom";
import { getData } from './action';
const { Meta } = Card;
function Details() {
    const history = useHistory()
    let location = history.location.pathname
    var arrVars = location.split("/");
    arrVars.pop();
    arrVars.pop();
    var restVar = arrVars.join("/");
    let id = location.substring(location.lastIndexOf('/') + 1)
    const [product, setProduct] = useState({})
    useEffect(() => {
        getData(id).then(result => {
            setProduct(result.res.data)
        })
    }, [])

    return (
        <>
            <PageHeaderWithBack title={product.product_name} subtitle="Product" islist={true} isadd={false} />
            <Row>
                <Col flex={2}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt=""
                                src={product.profile_image_url}
                            />
                        }
                        actions={[
                            <Avatar
                                shape="square" size={32}
                                src="https://firebasestorage.googleapis.com/v0/b/grodis-d88d3.appspot.com/o/PR%2FITC.jpg?alt=media&token=f8a172cb-6408-4d09-8953-c7dcbe032aa8" />,
                            <span>
                                <EditOutlined key="edit"  onClick={() => history.push(`${restVar}/edit/${id}`)} style={{
                                    fontSize: '30px'
                                }} />
                            </span>,
                        ]}
                    >

                        <Meta title={product.product_name} description={product.description} />

                    </Card>
                </Col>
                <Col flex={3}>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Manufacture" value={product.manufacture_name} prefix={<LikeOutlined style={{ color: 'blue' }} />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Brand" value={product.brand_name} prefix={<ApartmentOutlined />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Product Category Name" value={product.product_category_name} prefix={<SmileTwoTone />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Product Family Name" value={product.product_family_name} prefix={<HeartTwoTone twoToneColor="#eb2f96" woTone />} />
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

export default Details
