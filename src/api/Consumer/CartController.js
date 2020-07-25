import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddCart = async (filter, callback) => {
    return API.post('/AddCart', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCart');
        });
};

let UpdateCart = async (filter, callback) => {
    return API.post('/UpdateCart', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCart');
        });
};

let DeleteCart = async (filter, callback) => {
    return API.post('/DeleteCart', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCart');
        });
};

let GetCart = async (filter, callback) => {
    return API.post('/GetCart', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCart');
        });
};

let GetCarts = async (filter, callback) => {
    return API.post('/GetCarts', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCarts');
        });
};

let CartLookUp = async (filter, callback) => {
    return API.post('/CartLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CartLookUp');
        });
};

export { 
    AddCart,
    UpdateCart,
    DeleteCart,
    GetCart,
    GetCarts,
    CartLookUp };