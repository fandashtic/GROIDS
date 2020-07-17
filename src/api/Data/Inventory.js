import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'inventories';
const _primaryKey = 'inventory_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (inventory, callback) => {
    return await Add(_tableName, inventory, callback);
}

let Update = async (key, inventory, callback) => { 
    return await Edit(_tableName, _primaryKey, key, inventory, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion