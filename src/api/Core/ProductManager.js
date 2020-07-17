import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Product';
import { GetAllManufactureData } from 'api/Data/Manufacture';
import { GetAllBrandDatas } from 'api/Data/Brand';
import { GetAllProductCategoriesData } from 'api/Data/ProductCategory';
import { GetAllProductFamiliesData } from 'api/Data/ProductFamily';
import { Product_Lookup } from 'api/Table/Product';
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
            if (product) {
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

let GetProduct = async (productName, callback) => {
    return await GetById(productName, async (product) => {
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
        Product_Lookup.product_id = product.product_id;
        Product_Lookup.product_name = product.product_name;
        Product_Lookup.manufacture_id = product.manufacture_id;
        Product_Lookup.brand_id = product.brand_id;
        Product_Lookup.product_category_id = product.product_category_id;
        Product_Lookup.product_family_id = product.product_family_id;
        Product_Lookup.company_id = product.company_id;
        Product_Lookup.store_id = product.store_id;
        Product_Lookup.description = product.description;
        Product_Lookup.profile_image_url = product.profile_image_url;
        //product.status = product.status;
    }

    //company: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    //store: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],

    GetAllManufactureData(active_filter, async (manufactures) => {
        _product_Lookup.manufactures = manufactures;
        await GetAllBrandDatas(active_filter, async (brands) => {
            _product_Lookup.brands = brands;
            await GetAllProductCategoriesData(active_filter, async (productCategories) => {
                _product_Lookup.product_categories = productCategories;
                await GetAllProductFamiliesData(active_filter, async (productFamilies) => {
                    _product_Lookup.product_families = productFamilies;
                    return await ReturnObject(callback, null, _product_Lookup, 'GetProductHierarchyData');
                });
            });
        });
    });
}

export { IsProductValid, SaveProduct, UpdateProduct, DeleteProduct, GetProduct, GetAllProducts, ProductLookUp };