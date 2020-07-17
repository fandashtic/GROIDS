import { GetProductCategoryDataById, GetAllProductCategoriesData, SaveProductCategoryData, UpdateProductCategoryData, DeleteProductCategoryData } from 'api/Data/ProductCategory';

let IsProductCategoryValid = async (productCategoryName, password, callback) => {
    return await GetProductCategoryDataById(productCategoryName, async (productCategory) => {
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

let AddProductCategory = async (productCategory, callback) => {
    return await SaveProductCategoryData(productCategory, async (productCategory) => {
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

let UpdateProductCategory = async (key, productCategory, callback) => { 
    return await UpdateProductCategoryData(key, productCategory, async (productCategory) => {
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

let DeleteProductCategory = async (key, callback) =>
{
    return await DeleteProductCategoryData(key, async (productCategory) => {
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

let GetProductCategory = async (productCategoryName, callback) => {
    return await GetProductCategoryDataById(productCategoryName, async (productCategory) => {
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

let GetAllProductCategories = async (filter, callback) => {
    return await GetAllProductCategoriesData(filter, async (productCategorys) => {
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

export { IsProductCategoryValid, AddProductCategory, UpdateProductCategory, DeleteProductCategory, GetProductCategory, GetAllProductCategories };