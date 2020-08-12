import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, IsHasValue, ReturnObject, GetSessionValue } from 'api/Shared/Util';

let AddCart = async (data, callback) => {
    return API.post('/AddCart', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCart');
        });
};

let UpdateCart = async (id, data, callback) => {
    return API.post('/UpdateCart', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCart');
        });
};

let DeleteCart = async (id, callback) => {
    return API.post('/DeleteCart', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCart');
        });
};

let GetCart = async (id, callback) => {
    return API.post('/GetCart', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCart');
        });
};

let GetCarts = async (filter, callback) => {
    return API.post('/GetCarts', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCarts');
        });
};

let CartLookUp = async (id, callback) => {
    return API.post('/CartLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CartLookUp');
        });
};

let ImportCart = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddCart(obj, callback);
        });        
    }
};

export { 
    AddCart,
    UpdateCart,
    DeleteCart,
    GetCart,
    GetCarts,
    CartLookUp,
    ImportCart };