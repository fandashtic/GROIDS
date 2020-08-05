import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddProductCategory = async (data, callback) => {
    return API.post('/AddProductCategory', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddProductCategory');
        });
};

let UpdateProductCategory = async (id, data, callback) => {
    return API.post('/UpdateProductCategory', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateProductCategory');
        });
};

let DeleteProductCategory = async (id, callback) => {
    return API.post('/DeleteProductCategory', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteProductCategory');
        });
};

let GetProductCategory = async (id, callback) => {
    return API.post('/GetProductCategory', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductCategory');
        });
};

let GetProductCategories = async (filter, callback) => {
    return API.post('/GetProductCategories', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductCategories');
        });
};

let ProductCategoryLookUp = async (id, callback) => {
    return API.post('/ProductCategoryLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'ProductCategoryLookUp');
        });
};

export { AddProductCategory,
    UpdateProductCategory,
    DeleteProductCategory,
    GetProductCategory,
    GetProductCategories,
    ProductCategoryLookUp };