import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddProductFamily = async (filter, callback) => {
    return API.post('/AddProductFamily', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddProductFamily');
        });
};

let UpdateProductFamily = async (filter, callback) => {
    return API.post('/UpdateProductFamily', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateProductFamily');
        });
};

let DeleteProductFamily = async (filter, callback) => {
    return API.post('/DeleteProductFamily', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteProductFamily');
        });
};

let GetProductFamily = async (filter, callback) => {
    return API.post('/GetProductFamily', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductFamily');
        });
};

let GetProductFamilies = async (filter, callback) => {
    return API.post('/GetProductFamilies', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductFamilies');
        });
};

let ProductFamilyLookUp = async (filter, callback) => {
    return API.post('/ProductFamilyLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'ProductFamilyLookUp');
        });
};

export { AddProductFamily,
    UpdateProductFamily,
    DeleteProductFamily,
    GetProductFamily,
    GetProductFamiles,
    ProductFamilyLookUp };