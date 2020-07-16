
var { GetAllManufactures, AddManufacture, UpdateManufacture, DeleteManufacture } = require('./../Core/ManufactureManager');

exports.AddManufacture = async (manufacture, callback) => {
    return await AddManufacture(manufacture, callback);
};

exports.UpdateManufacture = async (manufactureId, manufacture, callback) => {
    return await UpdateManufacture(manufactureId, manufacture, callback);
};

exports.DeleteManufacture = async (manufactureId, callback) => {
    return await DeleteManufacture(manufactureId, callback);
};

exports.GetManufactures = async (filter, callback) => {
    return await GetAllManufactures( filter, callback);
};