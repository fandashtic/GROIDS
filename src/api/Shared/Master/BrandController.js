import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddBrand = async (filter, callback) => {
    return API.post('/AddBrand', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddBrand');
        });
};

let UpdateBrand = async (filter, callback) => {
    return API.post('/UpdateBrand', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateBrand');
        });
};

let DeleteBrand = async (filter, callback) => {
    return API.post('/DeleteBrand', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteBrand');
        });
};

let GetBrand = async (filter, callback) => {
    return API.post('/GetBrand', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetBrand');
        });
};

let GetBrands = async (filter, callback) => {
    return API.post('/GetBrands', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetBrands');
        });
};

let BrandLookUp = async (filter, callback) => {
    return API.post('/BrandLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'BrandLookUp');
        });
};

export { AddBrand,
    UpdateBrand,
    DeleteBrand,
    GetBrand,
    GetBrands,
    BrandLookUp };