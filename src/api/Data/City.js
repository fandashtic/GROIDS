var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'cities';
const _primaryKey = 'city_id';

//#region

exports.GetCityById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllCities = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddCity = async (city, callback) => {
    return await Add(_tableName, city, callback);
}

exports.UpdateCity = async (key, city, callback) => { 
    return await Update(_tableName, _primaryKey, key, city, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion