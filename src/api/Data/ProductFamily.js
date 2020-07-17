import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'productfamilys';
const _primaryKey = 'product_family_id';

//#regionProductFamilyData

let GetProductFamilyDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllProductFamiliesData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveProductFamilyData = async (productFamily, callback) => {
    return await Add(_tableName, productFamily, callback);
}

let UpdateProductFamilyData= async (key, productFamily, callback) => { 
    return await Edit(_tableName, _primaryKey, key, productFamily, callback);
}

let DeleteProductFamilyData = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetProductFamilyDataById, GetAllProductFamiliesData, SaveProductFamilyData, UpdateProductFamilyData, DeleteProductFamilyData };

//#endregion