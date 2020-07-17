import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Product';

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

export { IsProductValid, SaveProduct, UpdateProduct, DeleteProduct, GetProduct, GetAllProducts };