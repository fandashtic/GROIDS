import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, IsHasValue, ReturnObject } from 'api/Shared/Util';

let AddFavorite = async (data, callback) => {
    return API.post('/AddFavorite', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddFavorite');
        });
};

let UpdateFavorite = async (id, data, callback) => {
    return API.post('/UpdateFavorite', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateFavorite');
        });
};

let DeleteFavorite = async (id, callback) => {
    return API.post('/DeleteFavorite', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteFavorite');
        });
};

let GetFavorite = async (id, callback) => {
    return API.post('/GetFavorite', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetFavorite');
        });
};

let GetFavorites = async (filter, callback) => {
    return API.post('/GetFavorites', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetFavorites');
        });
};

let FavoriteLookUp = async (id, callback) => {
    return API.post('/FavoriteLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'FavoriteLookUp');
        });
};

let ImportFavorite = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddFavorite(obj, callback);
        });        
    }
};

export { AddFavorite,
    UpdateFavorite,
    DeleteFavorite,
    GetFavorite,
    GetFavorites,
    FavoriteLookUp,
    ImportFavorite };