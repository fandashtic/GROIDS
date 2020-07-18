import { GetAllStores, AddStore, UpdateStore, DeleteStore } from 'api/Controller/Store/node_modules/api/Core/StoreManager';

let AddStoreAPI = async (store, callback) => {
    return await AddStore(store, callback);
};

let UpdateStoreAPI = async (storeId, store, callback) => {
    return await UpdateStore(storeId, store, callback);
};

let DeleteStoreAPI = async (storeId, callback) => {
    return await DeleteStore(storeId, callback);
};

let GetStoresAPI = async (filter, callback) => {
    return await GetAllStores(filter, callback);
};

export { AddStoreAPI, UpdateStoreAPI, DeleteStoreAPI, GetStoresAPI };