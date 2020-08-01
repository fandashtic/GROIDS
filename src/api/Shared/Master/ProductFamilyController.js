import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddProductFamily = async (data, callback) => {
    return API.post('/AddProductFamily', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddProductFamily');
        });
};

let UpdateProductFamily = async (id, data, callback) => {
    return API.post('/UpdateProductFamily', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateProductFamily');
        });
};

let DeleteProductFamily = async (id, callback) => {
    return API.post('/DeleteProductFamily', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteProductFamily');
        });
};

let GetProductFamily = async (id, callback) => {
    return API.post('/GetProductFamily', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductFamily');
        });
};

let GetProductFamilies = async (filter, callback) => {
    return API.post('/GetProductFamilies', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductFamilies');
        });
};

let ProductFamilyLookUp = async (filter, callback) => {
    return API.post('/ProductFamilyLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'ProductFamilyLookUp');
        });
};

export { AddProductFamily,
    UpdateProductFamily,
    DeleteProductFamily,
    GetProductFamily,
    GetProductFamilies,
    ProductFamilyLookUp };