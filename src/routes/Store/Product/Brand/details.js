import React, { useEffect, useState } from 'react'
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, EditOutlined } from '@ant-design/icons';
import PageHeaderWithBackNoSearch from 'components/PageHeaderWithBackNoSearch';
import { useHistory } from "react-router-dom";
import { getBrand } from './action';
const Search = Input.Search;
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
        getBrand(id).then(result => {
            setProduct(result.res.data)
        })
    }, [])

    return (
        <>
            <PageHeaderWithBackNoSearch title={product.brand_name} subtitle="Product" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper" style={{margin: "0px"}}>
                <Col flex={2}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt=""
                                src={product.profile_image_url=== "image.png" ? '': product.profile_image_url}
                            />
                        }
                        actions={[
                            <span>
                                <EditOutlined key="edit" onClick={() => history.push(`${restVar}/edit/${id}`)} style={{
                                    fontSize: '30px'
                                }} />
                            </span>,
                            <span>
                                <Button type="danger" icon={<DeleteOutlined twoToneColor="red" />} size='large'>
                                    Remove
                            </Button>
                            </span>,
                        ]}
                    >

                        <Meta title={product.brand_name} description={product.description} />

                    </Card>
                </Col>
                <Col flex={3}>
                    <Row>
                        <Col span={12}>
                            <Statistic title="Manufacture" value={product.manufacture_name} prefix={<LikeOutlined style={{ color: 'blue' }} />} />
                        </Col>
                    </Row>
                    <Divider plain></Divider>
                </Col>
            </Row>
        </>
    )
}

export default Details
