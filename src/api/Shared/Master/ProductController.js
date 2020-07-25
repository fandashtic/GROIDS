import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddProduct = async (filter, callback) => {
    return API.post('/AddProduct', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddProduct');
        });
};

let UpdateProduct = async (filter, callback) => {
    return API.post('/UpdateProduct', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateProduct');
        });
};

let DeleteProduct = async (filter, callback) => {
    return API.post('/DeleteProduct', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteProduct');
        });
};

let GetProduct = async (filter, callback) => {
    return API.post('/GetProduct', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProduct');
        });
};

let GetProducts = async (filter, callback) => {
    return API.post('/GetProducts', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProducts');
        });
};

let ProductLookUp = async (filter, callback) => {
    return API.post('/ProductLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'ProductLookUp');
        });
};

export { AddProduct,
    UpdateProduct,
    DeleteProduct,
    GetProduct,
    GetProducts,
    ProductLookUp };