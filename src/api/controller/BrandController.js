
var { GetAllBrands, AddBrand, UpdateBrand, DeleteBrand } = require('./../Core/BrandManager');

exports.AddBrand = async (brand, callback) => {
    return await AddBrand(brand, callback);
};

exports.UpdateBrand = async (brandId, brand, callback) => {
    return await UpdateBrand(brandId, brand, callback);
};

exports.DeleteBrand = async (brandId, callback) => {
    return await DeleteBrand(brandId, callback);
};

exports.GetBrands = async (filter, callback) => {
    return await GetAllBrands( filter, callback);
};