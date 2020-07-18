import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'payments';
const _primaryKey = 'payment_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (payment, callback) => {    
    payment = AddDetaultValues(payment, 'payment_id', PreFix.Payment, payment.created_by);
    return await Add(_tableName, _primaryKey,payment, callback);
}

let Update = async (key, payment, callback) => { 
    return await Edit(_tableName, _primaryKey, key, payment, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion