import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddOrder = async (filter, callback) => {
    return API.post('/AddOrder', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddOrder');
        });
};

let UpdateOrder = async (filter, callback) => {
    return API.post('/UpdateOrder', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateOrder');
        });
};

let DeleteOrder = async (filter, callback) => {
    return API.post('/DeleteOrder', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteOrder');
        });
};

let GetOrder = async (filter, callback) => {
    return API.post('/GetOrder', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetOrder');
        });
};

let GetOrders = async (filter, callback) => {
    return API.post('/GetOrders', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetOrders');
        });
};

let OrderLookUp = async (filter, callback) => {
    return API.post('/OrderLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'OrderLookUp');
        });
};

export { AddOrder,
    UpdateOrder,
    DeleteOrder,
    GetOrder,
    GetOrders };