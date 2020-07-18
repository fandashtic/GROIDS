import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Store';
import { GetAllCityData } from 'api/Data/City';
import { GetAllStateData } from 'api/Data/State';
import { GetAllCountryData } from 'api/Data/Country';
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

let StoreLookUp = async (store_id, callback) => {
    if(IsHasValue(store_id)){
        return await GetById(store_id, async (store) => {            
            if (IsHasValue(store)) {
                return await GetStoreHierarchyData(store, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    }else{
        return await GetStoreHierarchyData(null, callback);
    }   
}

// const GetStoreHierarchyData = async (store, callback) => {
//     let active_filter = { 'status': true };
//     let _store_Lookup = {};

//     if (IsHasValue(store)) {
//         _store_Lookup.store_id = store.store_id;
//         _store_Lookup.store_name = store.store_name;
//         _store_Lookup.country_id = store.manufacture_id;
//         _store_Lookup.state_id = store.brand_id;
//         _store_Lookup.city_id = store.store_category_id;
//         _store_Lookup.area_id = store.store_family_id;
//         _store_Lookup.company_id = store.company_id;
//         _store_Lookup.store_id = store.store_id;
//         _store_Lookup.description = store.description;
//         _store_Lookup.profile_image_url = store.profile_image_url;
//         _store_Lookup.status = store.status;
//     }

//     GetAllCountryData(active_filter, async (countries) => {
//         let _m = GetLookUpData(countries, 'country_id', 'country_name', _store_Lookup.country_id);
//         _store_Lookup.manufactures = _m.list;
//         _store_Lookup.manufacture_name = _m.dispalyName;

//         await GetAllBrandDatas(active_filter, async (brands) => {
//             let _b = GetLookUpData(brands, 'state_id', 'brand_name', _store_Lookup.state_id);
//             _store_Lookup.brands = _b.list;
//             _store_Lookup.brand_name = _b.dispalyName;

//             await GetAllStoreCategoriesData(active_filter, async (storeCategories) => {
//                 let _bc = GetLookUpData(storeCategories, 'city_id', 'store_category_name', _store_Lookup.city_id);
//                 _store_Lookup.storeCategories = _bc.list;
//                 _store_Lookup.store_category_name = _bc.dispalyName;

//                 await GetAllStoreFamiliesData(active_filter, async (storeFamilies) => {
//                     let _bf = GetLookUpData(storeFamilies, 'store_family_id', 'store_family_name', _store_Lookup.store_family_id);
//                     _store_Lookup.store_families = _bf.list;
//                     _store_Lookup.store_family_name = _bf.dispalyName;

//                     return await ReturnObject(callback, null, _store_Lookup, 'GetStoreHierarchyData');
//                 });
//             });
//         });
//     });
// }

let GetLookUpData = (list, idCoulmn, displayColumn, selectedValue) => {
    let result = {list: [], displayName: ''};
    let _isSelected = false;
    list.forEach(l => {
        _isSelected = ((IsHasValue(selectedValue) && l[idCoulmn]) === selectedValue ? true : false);
        if(_isSelected === true) result.displayName = l[displayColumn];

        result.list.push(
            {
                label: l[displayColumn],
                value: l[idCoulmn],
                isSelected: _isSelected
            }
        )
    });
    return result;
}

export { IsStoreValid, AddStore, UpdateStore, DeleteStore, GetStore, GetAllStores };