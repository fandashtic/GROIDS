import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, IsHasValue, ReturnObject } from 'api/Shared/Util';

let AddProduct = async (data, callback) => {
    return API.post('/AddProduct', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddProduct');
        });
};

let UpdateProduct = async (id, data, callback) => {
    return API.post('/UpdateProduct', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateProduct');
        });
};

let DeleteProduct = async (id, callback) => {
    return API.post('/DeleteProduct', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteProduct');
        });
};

let GetProduct = async (id, callback) => {
    return API.post('/GetProduct', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProduct');
        });
};

let GetProducts = async (filter, callback) => {
    return API.post('/GetProducts', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetProducts');
        });
};

let ProductLookUp = async (id, callback) => {
    return API.post('/ProductLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'ProductLookUp');
        });
};

let ImportProduct = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddProduct(obj, callback);
        });        
    }
};

export { AddProduct,
    UpdateProduct,
    DeleteProduct,
    GetProduct,
    GetProducts,
    ProductLookUp,
    ImportProduct };