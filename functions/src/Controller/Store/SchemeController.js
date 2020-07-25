
const{ GetAllSchemes, AddScheme, UpdateScheme, DeleteScheme } = require('./../../Core/SchemeManager');

let AddSchemeAPI = async (scheme, callback) => {
    return await AddScheme(scheme, callback);
};

let UpdateSchemeAPI = async (schemeId, scheme, callback) => {
    return await UpdateScheme(schemeId, scheme, callback);
};

let DeleteSchemeAPI = async (schemeId, callback) => {
    return await DeleteScheme(schemeId, callback);
};

let GetSchemesAPI = async (filter, callback) => {
    return await GetAllSchemes(filter, callback);
};

module.exports = { AddSchemeAPI, UpdateSchemeAPI, DeleteSchemeAPI, GetSchemesAPI };