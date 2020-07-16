var { GetAllStores, GetStoreById, Add, Update, Delete } = require('./../Data/Store');

exports.IsStoreValid = async (storeName, password, callback) => {
    return await GetStoreById(storeName, async (store) => {
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

exports.AddStore = async (store, callback) => {
    return await Add(store, async (store) => {
        if (store) {
            return await callback({
                'data':store,
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

exports.UpdateStore = async (key, store, callback) => { 
    return await Update(key, store, async (store) => {
        if (store) {
            return await callback({
                'data':store,
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

exports.DeleteStore = async (key, callback) =>
{
    return await Delete(key, async (store) => {
        if (store) {
            return await callback({
                'data':store,
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

exports.GetStore = async (storeName, callback) => {
    return await GetStoreById(storeName, async (store) => {
        if (store) {
            return await callback({
                'data':store,
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

exports.GetAllStores = async (filter, callback) => {
    return await GetAllStores(filter, async (stores) => {
        if (stores) {
            return await callback({
                'data':stores,
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
