import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'brands';
const _primaryKey = 'brand_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (area, callback) => {
    return await Add(_tableName, area, callback);
}

let Update = async (key, area, callback) => { 
    return await Edit(_tableName, _primaryKey, key, area, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};


export { GetById, GetAll, Save, Update, Delete };

//#endregion