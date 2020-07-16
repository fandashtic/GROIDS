
var { GetAllCountrys, AddCountry, UpdateCountry, DeleteCountry } = require('./../Core/CountryManager');

exports.AddCountry = async (country, callback) => {
    return await AddCountry(country, callback);
};

exports.UpdateCountry = async (countryId, country, callback) => {
    return await UpdateCountry(countryId, country, callback);
};

exports.DeleteCountry = async (countryId, callback) => {
    return await DeleteCountry(countryId, callback);
};

exports.GetCountrys = async (filter, callback) => {
    return await GetAllCountrys( filter, callback);
};