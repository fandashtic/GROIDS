
var { GetAllProducts, AddProduct, UpdateProduct, DeleteProduct } = require('./../Core/ProductManager');

exports.AddProduct = async (product, callback) => {
    return await AddProduct(product, callback);
};

exports.UpdateProduct = async (productId, product, callback) => {
    return await UpdateProduct(productId, product, callback);
};

exports.DeleteProduct = async (productId, callback) => {
    return await DeleteProduct(productId, callback);
};

exports.GetProducts = async (filter, callback) => {
    return await GetAllProducts( filter, callback);
};