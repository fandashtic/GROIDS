var { GetAllProductCategorys, GetProductCategoryById, Add, Update, Delete } = require('./../Data/ProductCategory');

exports.IsProductCategoryValid = async (productCategoryName, password, callback) => {
    return await GetProductCategoryById(productCategoryName, async (productCategory) => {
        if (productCategory.password === password) {
            return await callback({
                'data': {
                    ProductCategoryName: productCategory.productCategoryName,
                    ProductCategoryDisplayName: productCategory.firstName + ' ' + productCategory.lastName,
                    ProductCategoryType: productCategory.productCategoryType,
                    CompanyId: productCategory.companyId,
                    StoreId: productCategory.storeId,
                    ProductCategoryProfileImage: productCategory.profileImageUrl
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

exports.AddProductCategory = async (productCategory, callback) => {
    return await Add(productCategory, async (productCategory) => {
        if (productCategory) {
            return await callback({
                'data':productCategory,
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

exports.UpdateProductCategory = async (key, productCategory, callback) => { 
    return await Update(key, productCategory, async (productCategory) => {
        if (productCategory) {
            return await callback({
                'data':productCategory,
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

exports.DeleteProductCategory = async (key, callback) =>
{
    return await Delete(key, async (productCategory) => {
        if (productCategory) {
            return await callback({
                'data':productCategory,
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

exports.GetProductCategory = async (productCategoryName, callback) => {
    return await GetProductCategoryById(productCategoryName, async (productCategory) => {
        if (productCategory) {
            return await callback({
                'data':productCategory,
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

exports.GetAllProductCategorys = async (filter, callback) => {
    return await GetAllProductCategorys(filter, async (productCategorys) => {
        if (productCategorys) {
            return await callback({
                'data':productCategorys,
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
