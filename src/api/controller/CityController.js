
var { GetAllCitys, AddCity, UpdateCity, DeleteCity } = require('./../Core/CityManager');

exports.AddCity = async (city, callback) => {
    return await AddCity(city, callback);
};

exports.UpdateCity = async (cityId, city, callback) => {
    return await UpdateCity(cityId, city, callback);
};

exports.DeleteCity = async (cityId, callback) => {
    return await DeleteCity(cityId, callback);
};

exports.GetCitys = async (filter, callback) => {
    return await GetAllCitys( filter, callback);
};