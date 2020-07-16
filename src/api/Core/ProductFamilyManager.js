var { GetAllProductFamilys, GetProductFamilyById, Add, Update, Delete } = require('./../Data/ProductFamily');

exports.IsProductFamilyValid = async (productFamilyName, password, callback) => {
    return await GetProductFamilyById(productFamilyName, async (productFamily) => {
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

exports.AddProductFamily = async (productFamily, callback) => {
    return await Add(productFamily, async (productFamily) => {
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

exports.UpdateProductFamily = async (key, productFamily, callback) => { 
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

exports.DeleteProductFamily = async (key, callback) =>
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

exports.GetProductFamily = async (productFamilyName, callback) => {
    return await GetProductFamilyById(productFamilyName, async (productFamily) => {
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

exports.GetAllProductFamilys = async (filter, callback) => {
    return await GetAllProductFamilys(filter, async (productFamilys) => {
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
