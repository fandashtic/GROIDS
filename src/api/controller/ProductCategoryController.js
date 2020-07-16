
var { GetAllProductCategorys, AddProductCategory, UpdateProductCategory, DeleteProductCategory } = require('./../Core/ProductCategoryManager');

exports.AddProductCategory = async (productCategory, callback) => {
    return await AddProductCategory(productCategory, callback);
};

exports.UpdateProductCategory = async (productCategoryId, productCategory, callback) => {
    return await UpdateProductCategory(productCategoryId, productCategory, callback);
};

exports.DeleteProductCategory = async (productCategoryId, callback) => {
    return await DeleteProductCategory(productCategoryId, callback);
};

exports.GetProductCategorys = async (filter, callback) => {
    return await GetAllProductCategorys( filter, callback);
};