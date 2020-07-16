var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'companys';
const _primaryKey = 'company_id';

//#region

exports.GetCompanyById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllCompanys = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddCompany = async (company, callback) => {
    return await Add(_tableName, company, callback);
}

exports.UpdateCompany = async (key, company, callback) => { 
    return await Update(_tableName, _primaryKey, key, company, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion