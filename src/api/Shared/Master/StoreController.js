import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddStore = async (filter, callback) => {
    return API.post('/AddStore', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddStore');
        });
};

let UpdateStore = async (filter, callback) => {
    return API.post('/UpdateStore', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateStore');
        });
};

let DeleteStore = async (filter, callback) => {
    return API.post('/DeleteStore', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteStore');
        });
};

let GetStore = async (filter, callback) => {
    return API.post('/GetStore', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetStore');
        });
};

let GetStores = async (filter, callback) => {
    return API.post('/GetStores', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetStores');
        });
};

let StoreLookUp = async (filter, callback) => {
    return API.post('/StoreLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'StoreLookUp');
        });
};

export { AddStore,
    UpdateStore,
    DeleteStore,
    GetStore,
    GetStores,
    StoreLookUp };