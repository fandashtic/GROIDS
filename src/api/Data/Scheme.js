import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'schemes';
const _primaryKey = 'scheme_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (scheme, callback) => {
    return await Add(_tableName, _primaryKey,scheme, callback);
}

let Update = async (key, scheme, callback) => { 
    return await Edit(_tableName, _primaryKey, key, scheme, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion