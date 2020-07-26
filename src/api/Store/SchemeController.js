import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddScheme = async (filter, callback) => {
    return API.post('/AddScheme', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddScheme');
        });
};

let UpdateScheme = async (filter, callback) => {
    return API.post('/UpdateScheme', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateScheme');
        });
};

let DeleteScheme = async (filter, callback) => {
    return API.post('/DeleteScheme', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteScheme');
        });
};

let GetScheme = async (filter, callback) => {
    return API.post('/GetScheme', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetScheme');
        });
};

let GetSchemes = async (filter, callback) => {
    return API.post('/GetSchemes', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetSchemes');
        });
};

let SchemeLookUp = async (filter, callback) => {
    return API.post('/SchemeLookUp', filter)
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