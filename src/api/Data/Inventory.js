import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

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
    inventory = AddDetaultValues(inventory, 'inventory_id', PreFix.Inventory, inventory.created_by);
    return await Add(_tableName, _primaryKey, inventory, callback);
}

let Update = async (key, inventory, callback) => {
    inventory = UpdateDetaultValues(inventory, inventory.modified_by);
    return await Edit(_tableName, _primaryKey, key, inventory, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion