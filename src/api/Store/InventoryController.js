import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddInventory = async (filter, callback) => {
    return API.post('/AddInventory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddInventory');
        });
};

let UpdateInventory = async (filter, callback) => {
    return API.post('/UpdateInventory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateInventory');
        });
};

let DeleteInventory = async (filter, callback) => {
    return API.post('/DeleteInventory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteInventory');
        });
};

let GetInventory = async (filter, callback) => {
    return API.post('/GetInventory', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetInventory');
        });
};

let GetInventories = async (filter, callback) => {
    return API.post('/GetInventories', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetInventories');
        });
};

let InventoryLookUp = async (filter, callback) => {
    return API.post('/InventoryLookUp', filter)
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