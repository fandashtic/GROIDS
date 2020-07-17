import {   Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

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
    return await Add(_tableName, manufacture, callback);
}

let UpdateManufactureData = async (key, manufacture, callback) => { 
    return await Edit(_tableName, _primaryKey, key, manufacture, callback);
}

let DeleteManufactureData = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetManufactureDataById, GetAllManufactureData, SaveManufactureData, UpdateManufactureData, DeleteManufactureData };

//#endregion