var { GetAllProducts, GetProductById, Add, Update, Delete } = require('./../Data/Product');

exports.IsProductValid = async (productName, password, callback) => {
    return await GetProductById(productName, async (product) => {
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

exports.AddProduct = async (product, callback) => {
    return await Add(product, async (product) => {
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

exports.UpdateProduct = async (key, product, callback) => { 
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

exports.DeleteProduct = async (key, callback) =>
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

exports.GetProduct = async (productName, callback) => {
    return await GetProductById(productName, async (product) => {
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

exports.GetAllProducts = async (filter, callback) => {
    return await GetAllProducts(filter, async (products) => {
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
