import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, IsHasValue, ReturnObject } from 'api/Shared/Util';

let AddBrand = async (data, callback) => {
    return API.post('/AddBrand', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddBrand');
        });
};

let UpdateBrand = async (id, data, callback) => {
    return API.post('/UpdateBrand', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateBrand');
        });
};

let DeleteBrand = async (id, callback) => {
    return API.post('/DeleteBrand', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteBrand');
        });
};

let GetBrand = async (id, callback) => {
    return API.post('/GetBrand', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetBrand');
        });
};

let GetBrands = async (filter, callback) => {
    return API.post('/GetBrands', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetBrands');
        });
};

let BrandLookUp = async (id, callback) => {
    return API.post('/BrandLookUp',GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'BrandLookUp');
        });
};

let ImportBrand = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddBrand(obj, callback);
        });        
    }
};

export { AddBrand,
    UpdateBrand,
    DeleteBrand,
    GetBrand,
    GetBrands,
    BrandLookUp,
    ImportBrand };