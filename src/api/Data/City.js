import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'cities';
const _primaryKey = 'city_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (city, callback) => {
    return await Add(_tableName, _primaryKey,city, callback);
}

let Update = async (key, city, callback) => { 
    return await Edit(_tableName, _primaryKey, key, city, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion