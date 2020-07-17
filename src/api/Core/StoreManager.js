import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Store';

let IsStoreValid = async (storeName, password, callback) => {
    return await GetById(storeName, async (store) => {
        if (store.password === password) {
            return await callback({
                'data': {
                    StoreName: store.storeName,
                    StoreDisplayName: store.firstName + ' ' + store.lastName,
                    StoreType: store.storeType,
                    CompanyId: store.companyId,
                    StoreId: store.storeId,
                    StoreProfileImage: store.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let AddStore = async (store, callback) => {
    return await Save(store, async (store) => {
        if (store) {
            return await callback({
                'data': store,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let UpdateStore = async (key, store, callback) => {
    return await Update(key, store, async (store) => {
        if (store) {
            return await callback({
                'data': store,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let DeleteStore = async (key, callback) => {
    return await Delete(key, async (store) => {
        if (store) {
            return await callback({
                'data': store,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let GetStore = async (storeName, callback) => {
    return await GetById(storeName, async (store) => {
        if (store) {
            return await callback({
                'data': store,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let GetAllStores = async (filter, callback) => {
    return await GetAll(filter, async (stores) => {
        if (stores) {
            return await callback({
                'data': stores,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

export { IsStoreValid, AddStore, UpdateStore, DeleteStore, GetStore, GetAllStores };