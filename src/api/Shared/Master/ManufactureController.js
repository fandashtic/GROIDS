import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddManufacture = async (filter, callback) => {
    return API.post('/AddManufacture', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddManufacture');
        });
};

let UpdateManufacture = async (filter, callback) => {
    return API.post('/UpdateManufacture', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateManufacture');
        });
};

let DeleteManufacture = async (filter, callback) => {
    return API.post('/DeleteManufacture', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteManufacture');
        });
};

let GetManufacture = async (filter, callback) => {
    return API.post('/GetManufacture', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetManufacture');
        });
};

let GetManufactures = async (filter, callback) => {
    return API.post('/GetManufactures', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetManufactures');
        });
};

let ManufactureLookUp = async (filter, callback) => {
    return API.post('/ManufactureLookUp', filter)
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