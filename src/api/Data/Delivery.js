import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'deliveries';
const _primaryKey = 'delivery_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (delivery, callback) => {
    delivery = AddDetaultValues(delivery, 'delivery_id', PreFix.Delivery, delivery.created_by);
    return await Add(_tableName, _primaryKey, delivery, callback);
}

let Update = async (key, delivery, callback) => {
    delivery = UpdateDetaultValues(delivery, delivery.modified_by);
    return await Edit(_tableName, _primaryKey, key, delivery, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion