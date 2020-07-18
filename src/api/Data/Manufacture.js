import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'manufactures';
const _primaryKey = 'manufacture_id';

//#region ManufactureData

let GetManufactureDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllManufactureData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveManufactureData = async (manufacture, callback) => {    
    manufacture = AddDetaultValues(manufacture, 'manufacture_id', PreFix.Manufacture, manufacture.created_by);
    return await Add(_tableName, _primaryKey, manufacture, callback);
}

let UpdateManufactureData = async (key, manufacture, callback) => {
    manufacture = UpdateDetaultValues(manufacture, manufacture.modified_by);
    return await Edit(_tableName, _primaryKey, key, manufacture, callback);
}

let DeleteManufactureData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetManufactureDataById, GetAllManufactureData, SaveManufactureData, UpdateManufactureData, DeleteManufactureData };

//#endregion