import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'companys';
const _primaryKey = 'company_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (company, callback) => {
    return await Add(_tableName, _primaryKey,company, callback);
}

let Update = async (key, company, callback) => { 
    return await Edit(_tableName, _primaryKey, key, company, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion