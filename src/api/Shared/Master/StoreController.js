import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, IsHasValue, ReturnObject } from 'api/Shared/Util';

let AddStore = async (data, callback) => {
    return API.post('/AddStore', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddStore');
        });
};

let UpdateStore = async (id, data, callback) => {
    return API.post('/UpdateStore', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateStore');
        });
};

let DeleteStore = async (id, callback) => {
    return API.post('/DeleteStore', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteStore');
        });
};

let GetStore = async (id, callback) => {
    return API.post('/GetStore', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetStore');
        });
};

let GetStores = async (filter, callback) => {
    return API.post('/GetStores', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetStores');
        });
};

let StoreLookUp = async (id, callback) => {
    return API.post('/StoreLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'StoreLookUp');
        });
};

let ImportStore = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddStore(obj, callback);
        });        
    }
};

export { AddStore,
    UpdateStore,
    DeleteStore,
    GetStore,
    GetStores,
    StoreLookUp,
    ImportStore };