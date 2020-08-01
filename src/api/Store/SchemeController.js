import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddScheme = async (data, callback) => {
    return API.post('/AddScheme', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddScheme');
        });
};

let UpdateScheme = async (id, data, callback) => {
    return API.post('/UpdateScheme', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateScheme');
        });
};

let DeleteScheme = async (id, callback) => {
    return API.post('/DeleteScheme', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteScheme');
        });
};

let GetScheme = async (id, callback) => {
    return API.post('/GetScheme', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetScheme');
        });
};

let GetSchemes = async (id, callback) => {
    return API.post('/GetSchemes', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetSchemes');
        });
};

let SchemeLookUp = async (filter, callback) => {
    return API.post('/SchemeLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'SchemeLookUp');
        });
};

export { AddScheme,
    UpdateScheme,
    DeleteScheme,
    GetScheme,
    GetSchemes,
    SchemeLookUp };