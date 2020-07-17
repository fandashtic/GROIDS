import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'productfamilys';
const _primaryKey = 'product_family_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (productFamily, callback) => {
    return await Add(_tableName, productFamily, callback);
}

let Update = async (key, productFamily, callback) => { 
    return await Edit(_tableName, _primaryKey, key, productFamily, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion