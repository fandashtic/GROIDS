import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Input, Badge, Card, List, Avatar, Statistic, Row, Col, Button, Tooltip, InputNumber } from 'antd';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
import { OrderLookUp } from 'api/Store/OrderController';
import { GetProducts } from 'api/Shared/Master/ProductController';
import { GetImage } from 'api/Shared/Util';
const Search = Input.Search;

const Order = () => {

    const [order_id, setOrder_id] = useState('');
    const [order, setOrder] = useState({});
    const [products, setProducts] = useState([]);

    let product_filter = {'status': true};

    useEffect(() => {

        OrderLookUp(order_id, (res, err) => {
            console.log(res, err);
            if (res.Status === 200) {
                setOrder(res.data);
            }
        });

        GetProducts(product_filter, (res, err) => {
            console.log(res, err);
            if (res.Status === 200) {
                setProducts(res.data);
            }
        });

    }, [order_id]);


    function onChange(value) {
        console.log('changed', value);
    }


    return (
        <>
            <PageHeaderWithBack title="New Order" subtitle="Order" />
            <div className="gx-main-content-wrapper">


            {products ?
                    <List
                        itemLayout="horizontal"
                        dataSource={products}
                        renderItem={product => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={GetImage(product.profile_image_url)} />}
                                    title={<a>{product.product_name}</a>}
                                    description={ product.manufacture_name + ' | ' + product.brand_name + ' | ' + product.product_category_name + ' | ' + product.product_family_name }
                                />
                                <div>

                                <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} 
                                style={{
                                        top: '-6px',
                                        width: '60px'
                                }} />

                                <Button
                                    type="primary"
                                    icon={<ShoppingCartOutlined />}                                    
                                    >
                                    Add to Cart
                                    </Button>
                                </div>
                            </List.Item>
                        )}
                    />
                    : null}


                
            </div>
        </>
    )
}

export default Order;