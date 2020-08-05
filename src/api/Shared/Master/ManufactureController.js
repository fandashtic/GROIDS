import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddManufacture = async (data, callback) => {
    return API.post('/AddManufacture', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddManufacture');
        });
};

let UpdateManufacture = async (id, data, callback) => {
    return API.post('/UpdateManufacture', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateManufacture');
        });
};

let DeleteManufacture = async (id, callback) => {
    return API.post('/DeleteManufacture', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteManufacture');
        });
};

let GetManufacture = async (id, callback) => {
    return API.post('/GetManufacture', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetManufacture');
        });
};

let GetManufactures = async (filter, callback) => {
    return API.post('/GetManufactures', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetManufactures');
        });
};

let ManufactureLookUp = async (id, callback) => {
    return API.post('/ManufactureLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'ManufactureLookUp');
        });
};

export { AddManufacture,
    UpdateManufacture,
    DeleteManufacture,
    GetManufacture,
    GetManufactures,
    ManufactureLookUp };