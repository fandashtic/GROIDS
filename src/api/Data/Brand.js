import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'brands';
const _primaryKey = 'brand_id';

//#region 

let GetBrandDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllBrandDatas = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveBrandData = async (area, callback) => {
    return await Add(_tableName, area, callback);
}

let UpdateBrandData = async (key, area, callback) => { 
    return await Edit(_tableName, _primaryKey, key, area, callback);
}

let DeleteBrandData = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};


export { GetBrandDataById, GetAllBrandDatas, SaveBrandData, UpdateBrandData, DeleteBrandData };

//#endregion