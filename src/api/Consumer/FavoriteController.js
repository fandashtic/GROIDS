import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddFavorite = async (filter, callback) => {
    return API.post('/AddFavorite', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddFavorite');
        });
};

let UpdateFavorite = async (filter, callback) => {
    return API.post('/UpdateFavorite', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateFavorite');
        });
};

let DeleteFavorite = async (filter, callback) => {
    return API.post('/DeleteFavorite', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteFavorite');
        });
};

let GetFavorite = async (filter, callback) => {
    return API.post('/GetFavorite', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetFavorite');
        });
};

let GetFavorites = async (filter, callback) => {
    return API.post('/GetFavorites', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetFavorites');
        });
};

let FavoriteLookUp = async (filter, callback) => {
    return API.post('/FavoriteLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'FavoriteLookUp');
        });
};

export { AddFavorite,
    UpdateFavorite,
    DeleteFavorite,
    GetFavorite,
    GetFavorites,
    FavoriteLookUp };