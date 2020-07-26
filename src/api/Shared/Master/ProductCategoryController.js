import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddProductCategory = async (filter, callback) => {
    return API.post('/AddProductCategory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddProductCategory');
        });
};

let UpdateProductCategory = async (filter, callback) => {
    return API.post('/UpdateProductCategory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateProductCategory');
        });
};

let DeleteProductCategory = async (filter, callback) => {
    return API.post('/DeleteProductCategory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteProductCategory');
        });
};

let GetProductCategory = async (filter, callback) => {
    return API.post('/GetProductCategory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductCategory');
        });
};

let GetProductCategories = async (filter, callback) => {
    return API.post('/GetProductCategories', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProductCategories');
        });
};

let ProductCategoryLookUp = async (filter, callback) => {
    return API.post('/ProductCategoryLookUp', filter)
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