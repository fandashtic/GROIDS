import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddDelivery = async (data, callback) => {
    return API.post('/AddDelivery', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddDelivery');
        });
};

let UpdateDelivery = async (id, data, callback) => {
    return API.post('/UpdateDelivery', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateDelivery');
        });
};

let DeleteDelivery = async (id, callback) => {
    return API.post('/DeleteDelivery', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteDelivery');
        });
};

let GetDelivery = async (id, callback) => {
    return API.post('/GetDelivery', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetDelivery');
        });
};

let GetDeliveries = async (filter, callback) => {
    return API.post('/GetDeliveries', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetDeliveries');
        });
};

let DeliveryLookUp = async (filter, callback) => {
    return API.post('/DeliveryLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeliveryLookUp');
        });
};

export { AddDelivery,
    UpdateDelivery,
    DeleteDelivery,
    GetDelivery,
    GetDeliveries };