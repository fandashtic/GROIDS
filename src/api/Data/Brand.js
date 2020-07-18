import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'brands';
const _primaryKey = 'brand_id';

//#region 

let GetBrandDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllBrandDatas = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveBrandData = async (brand, callback) => {
    brand = AddDetaultValues(brand, 'brand_id', PreFix.Brand, brand.created_by);
    return await Add(_tableName, _primaryKey, brand, callback);
}

let UpdateBrandData = async (key, brand, callback) => {
    brand = UpdateDetaultValues(brand, brand.modified_by);
    return await Edit(_tableName, _primaryKey, key, brand, callback);
}

let DeleteBrandData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};


export { GetBrandDataById, GetAllBrandDatas, SaveBrandData, UpdateBrandData, DeleteBrandData };

//#endregion