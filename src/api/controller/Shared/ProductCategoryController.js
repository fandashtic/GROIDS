
import { ProductCategoryLookUp, 
    //IsProductCategoryValid, 
    AddProductCategory, UpdateProductCategory, DeleteProductCategory, GetProductCategory, GetAllProductCategories } from 'api/Core/ProductCategoryManager';

let AddProductCategoryAPI = async (productCategory, callback) => {
    return await AddProductCategory(productCategory, callback);
};

let UpdateProductCategoryAPI = async (product_category_id, productCategory, callback) => {
    return await UpdateProductCategory(product_category_id, productCategory, callback);
};

let DeleteProductCategoryAPI = async (product_category_id, callback) => {
    return await DeleteProductCategory(product_category_id, callback);
};

let GetProductCategorysAPI = async (filter, callback) => {
    return await GetAllProductCategories(filter, callback);
};

let GetProductCategoryAPI = async (product_category_id, callback) => {
    return await GetProductCategory(product_category_id, callback);
};

let ProductCategoryLookUpAPI = async (product_category_id, callback) => {
    return await ProductCategoryLookUp(product_category_id, callback);
};

export { GetProductCategoryAPI, ProductCategoryLookUpAPI, AddProductCategoryAPI, UpdateProductCategoryAPI, DeleteProductCategoryAPI, GetProductCategorysAPI };