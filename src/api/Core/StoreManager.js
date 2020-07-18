import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Store';
import { GetAllCityData } from 'api/Data/City';
import { GetAllBrandDatas } from 'api/Data/State';
import { GetAllProductCategoriesData } from 'api/Data/Country';
import { ReturnObject } from 'api/Shared/Util';
import { IsHasValue } from 'api/Shared/Util'

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

let StoreLookUp = async (product_id, callback) => {
    if(IsHasValue(product_id)){
        return await GetById(product_id, async (product) => {            
            if (IsHasValue(product)) {
                return await GetProductHierarchyData(product, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    }else{
        return await GetProductHierarchyData(null, callback);
    }   
}

export { IsStoreValid, AddStore, UpdateStore, DeleteStore, GetStore, GetAllStores };