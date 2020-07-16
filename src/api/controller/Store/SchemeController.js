
var { GetAllSchemes, AddScheme, UpdateScheme, DeleteScheme } = require('./../Core/SchemeManager');

exports.AddScheme = async (scheme, callback) => {
    return await AddScheme(scheme, callback);
};

exports.UpdateScheme = async (schemeId, scheme, callback) => {
    return await UpdateScheme(schemeId, scheme, callback);
};

exports.DeleteScheme = async (schemeId, callback) => {
    return await DeleteScheme(schemeId, callback);
};

exports.GetSchemes = async (filter, callback) => {
    return await GetAllSchemes( filter, callback);
};