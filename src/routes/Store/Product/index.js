import React, { useState, useEffect } from 'react'
import { Divider, Input } from 'antd';
const Search = Input.Search;

const PageHeaderWithBack = ({ title, subtitle, backurl }) =>
    <div>
        <h2>
            {title}
        </h2>
        <span className={'badge'}>{subtitle}</span>
        <Divider orientation="left" plain>
        </Divider>
    </div>;

const ProductList = () => {
    return (
        <>
            <PageHeaderWithBack title="Product Name" subtitle="Product" backurl=""></PageHeaderWithBack>
            <Search placeholder="What you like..."
             style={{ width: '50%',
             position: 'absolute',
             top: '33px',
             left: '250px' }}
             enterButton="Search Product" size="large"/>
        </>
    )
}

export default ProductList;
