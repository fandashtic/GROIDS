import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'myfavorites';
const _primaryKey = 'myfavorite_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (myfavorite, callback) => {
    return await Add(_tableName, _primaryKey,myfavorite, callback);
}

let Update = async (key, myfavorite, callback) => { 
    return await Edit(_tableName, _primaryKey, key, myfavorite, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion