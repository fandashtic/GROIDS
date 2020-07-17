import { GetById, GetAll, Save, Update, Delete } from 'api/Data/ProductFamily';

let IsProductFamilyValid = async (productFamilyName, password, callback) => {
    return await GetById(productFamilyName, async (productFamily) => {
        if (productFamily.password === password) {
            return await callback({
                'data': {
                    ProductFamilyName: productFamily.productFamilyName,
                    ProductFamilyDisplayName: productFamily.firstName + ' ' + productFamily.lastName,
                    ProductFamilyType: productFamily.productFamilyType,
                    CompanyId: productFamily.companyId,
                    StoreId: productFamily.storeId,
                    ProductFamilyProfileImage: productFamily.profileImageUrl
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

let AddProductFamily = async (productFamily, callback) => {
    return await Save(productFamily, async (productFamily) => {
        if (productFamily) {
            return await callback({
                'data':productFamily,
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

let UpdateProductFamily = async (key, productFamily, callback) => { 
    return await Update(key, productFamily, async (productFamily) => {
        if (productFamily) {
            return await callback({
                'data':productFamily,
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

let DeleteProductFamily = async (key, callback) =>
{
    return await Delete(key, async (productFamily) => {
        if (productFamily) {
            return await callback({
                'data':productFamily,
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

let GetProductFamily = async (productFamilyName, callback) => {
    return await GetById(productFamilyName, async (productFamily) => {
        if (productFamily) {
            return await callback({
                'data':productFamily,
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

let GetAllProductFamilys = async (filter, callback) => {
    return await GetAll(filter, async (productFamilys) => {
        if (productFamilys) {
            return await callback({
                'data':productFamilys,
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

export { IsProductFamilyValid, AddProductFamily, UpdateProductFamily, DeleteProductFamily, GetProductFamily, GetAllProductFamilys };