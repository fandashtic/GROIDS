import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddInventory = async (data, callback) => {
    return API.post('/AddInventory', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddInventory');
        });
};

let UpdateInventory = async (id, data, callback) => {
    return API.post('/UpdateInventory', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateInventory');
        });
};

let DeleteInventory = async (id, callback) => {
    return API.post('/DeleteInventory', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteInventory');
        });
};

let GetInventory = async (id, callback) => {
    return API.post('/GetInventory', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetInventory');
        });
};

let GetInventories = async (filter, callback) => {
    return API.post('/GetInventories', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetInventories');
        });
};

let InventoryLookUp = async (id, callback) => {
    return API.post('/InventoryLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'InventoryLookUp');
        });
};

export { AddInventory,
    UpdateInventory,
    DeleteInventory,
    GetInventory,
    GetInventories,
    InventoryLookUp };