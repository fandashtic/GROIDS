import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddOrder = async (data, callback) => {
    return API.post('/AddOrder', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddOrder');
        });
};

let UpdateOrder = async (id, data, callback) => {
    return API.post('/UpdateOrder', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateOrder');
        });
};

let DeleteOrder = async (id, callback) => {
    return API.post('/DeleteOrder', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteOrder');
        });
};

let GetOrder = async (id, callback) => {
    return API.post('/GetOrder', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetOrder');
        });
};

let GetOrders = async (filter, callback) => {
    return API.post('/GetOrders', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetOrders');
        });
};

let OrderLookUp = async (id, callback) => {
    return API.post('/OrderLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'OrderLookUp');
        });
};

export { AddOrder,
    UpdateOrder,
    DeleteOrder,
    GetOrder,
    GetOrders };