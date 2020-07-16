
var { GetAllStores, AddStore, UpdateStore, DeleteStore } = require('./../Core/StoreManager');

exports.AddStore = async (store, callback) => {
    return await AddStore(store, callback);
};

exports.UpdateStore = async (storeId, store, callback) => {
    return await UpdateStore(storeId, store, callback);
};

exports.DeleteStore = async (storeId, callback) => {
    return await DeleteStore(storeId, callback);
};

exports.GetStores = async (filter, callback) => {
    return await GetAllStores( filter, callback);
};