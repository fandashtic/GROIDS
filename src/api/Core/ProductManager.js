import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Product';
import { GetAllManufactureData } from 'api/Data/Manufacture';
import { GetAllBrandDatas } from 'api/Data/Brand';
import { GetAllProductCategoriesData } from 'api/Data/ProductCategory';
import { GetAllProductFamiliesData } from 'api/Data/ProductFamily';
import { ReturnObject } from 'api/Shared/Util';

import { IsHasValue } from 'api/Shared/Util'

let IsProductValid = async (productName, password, callback) => {
    return await GetById(productName, async (product) => {
        if (product.password === password) {
            return await callback({
                'data': {
                    ProductName: product.productName,
                    ProductDisplayName: product.firstName + ' ' + product.lastName,
                    ProductType: product.productType,
                    CompanyId: product.companyId,
                    StoreId: product.storeId,
                    ProductProfileImage: product.profileImageUrl
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

let ProductLookUp = async (product_id, callback) => {
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

let SaveProduct = async (product, callback) => {
    return await Save(product, async (product) => {
        if (product) {
            return await callback({
                'data':product,
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

let UpdateProduct = async (key, product, callback) => { 
    return await Update(key, product, async (product) => {
        if (product) {
            return await callback({
                'data':product,
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

let DeleteProduct = async (key, callback) =>
{
    return await Delete(key, async (product) => {
        if (product) {
            return await callback({
                'data':product,
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

let GetProduct = async (product_id, callback) => {
    return await GetById(product_id, async (product) => {
        if (product) {
            return await callback({
                'data':product,
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

let GetAllProducts = async (filter, callback) => {
    return await GetAll(filter, async (products) => {
        if (products) {
            return await callback({
                'data':products,
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

const GetProductHierarchyData = async (product, callback) => {
    let active_filter = { 'status': true };
    let _product_Lookup = {};

    if (IsHasValue(product)) {
        _product_Lookup.product_id = product.product_id;
        _product_Lookup.product_name = product.product_name;
        _product_Lookup.manufacture_id = product.manufacture_id;
        _product_Lookup.brand_id = product.brand_id;
        _product_Lookup.product_category_id = product.product_category_id;
        _product_Lookup.product_family_id = product.product_family_id;
        _product_Lookup.company_id = product.company_id;
        _product_Lookup.store_id = product.store_id;
        _product_Lookup.description = product.description;
        _product_Lookup.profile_image_url = product.profile_image_url;
        _product_Lookup.status = product.status;
    }

    GetAllManufactureData(active_filter, async (manufactures) => {
        let _m = GetLookUpData(manufactures, 'manufacture_id', 'manufacture_name', _product_Lookup.manufacture_id);
        _product_Lookup.manufactures = _m.list;
        _product_Lookup.manufacture_name = _m.dispalyName;

        await GetAllBrandDatas(active_filter, async (brands) => {
            let _b = GetLookUpData(brands, 'brand_id', 'brand_name', _product_Lookup.brand_id);
            _product_Lookup.brands = _b.list;
            _product_Lookup.brand_name = _b.dispalyName;

            await GetAllProductCategoriesData(active_filter, async (productCategories) => {
                let _bc = GetLookUpData(productCategories, 'product_category_id', 'product_category_name', _product_Lookup.product_category_id);
                _product_Lookup.productCategories = _bc.list;
                _product_Lookup.product_category_name = _bc.dispalyName;

                await GetAllProductFamiliesData(active_filter, async (productFamilies) => {
                    let _bf = GetLookUpData(productFamilies, 'product_family_id', 'product_family_name', _product_Lookup.product_family_id);
                    _product_Lookup.product_families = _bf.list;
                    _product_Lookup.product_family_name = _bf.dispalyName;

                    return await ReturnObject(callback, null, _product_Lookup, 'GetProductHierarchyData');
                });
            });
        });
    });
}

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

export { IsProductValid, SaveProduct, UpdateProduct, DeleteProduct, GetProduct, GetAllProducts, ProductLookUp };