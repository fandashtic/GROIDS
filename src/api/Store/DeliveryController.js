import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddDelivery = async (filter, callback) => {
    return API.post('/AddDelivery', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddDelivery');
        });
};

let UpdateDelivery = async (filter, callback) => {
    return API.post('/UpdateDelivery', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateDelivery');
        });
};

let DeleteDelivery = async (filter, callback) => {
    return API.post('/DeleteDelivery', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteDelivery');
        });
};

let GetDelivery = async (filter, callback) => {
    return API.post('/GetDelivery', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetDelivery');
        });
};

let GetDeliveries = async (filter, callback) => {
    return API.post('/GetDeliveries', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetDeliveries');
        });
};

let DeliveryLookUp = async (filter, callback) => {
    return API.post('/DeliveryLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeliveryLookUp');
        });
};

export { AddDelivery,
    UpdateDelivery,
    DeleteDelivery,
    GetDelivery,
    GetDeliveries };