
var { GetAllProductFamilys, AddProductFamily, UpdateProductFamily, DeleteProductFamily } = require('./../Core/ProductFamilyManager');

exports.AddProductFamily = async (productFamily, callback) => {
    return await AddProductFamily(productFamily, callback);
};

exports.UpdateProductFamily = async (productFamilyId, productFamily, callback) => {
    return await UpdateProductFamily(productFamilyId, productFamily, callback);
};

exports.DeleteProductFamily = async (productFamilyId, callback) => {
    return await DeleteProductFamily(productFamilyId, callback);
};

exports.GetProductFamilys = async (filter, callback) => {
    return await GetAllProductFamilys( filter, callback);
};