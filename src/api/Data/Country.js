var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'countrys';
const _primaryKey = 'country_id';

//#region

exports.GetCountryById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllCountrys = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddCountry = async (country, callback) => {
    return await Add(_tableName, country, callback);
}

exports.UpdateCountry = async (key, country, callback) => { 
    return await Update(_tableName, _primaryKey, key, country, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion