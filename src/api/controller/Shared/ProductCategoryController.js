
import { GetAllProductCategories, AddProductCategory, UpdateProductCategory, DeleteProductCategory } from 'api/Controller/Shared/node_modules/api/Core/ProductCategoryManager';

let AddProductCategoryAPI = async (productCategory, callback) => {
    return await AddProductCategory(productCategory, callback);
};

let UpdateProductCategoryAPI = async (productCategoryId, productCategory, callback) => {
    return await UpdateProductCategory(productCategoryId, productCategory, callback);
};

let DeleteProductCategoryAPI = async (productCategoryId, callback) => {
    return await DeleteProductCategory(productCategoryId, callback);
};

let GetProductCategorysAPI = async (filter, callback) => {
    return await GetAllProductCategories(filter, callback);
};

export { AddProductCategoryAPI, UpdateProductCategoryAPI, DeleteProductCategoryAPI, GetProductCategorysAPI };