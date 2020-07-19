import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'productfamilies';
const _primaryKey = 'product_family_id';

//#regionProductFamilyData

let GetProductFamilyDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllProductFamiliesData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveProductFamilyData = async (productFamily, callback) => {
    productFamily = AddDetaultValues(productFamily, 'product_family_id', PreFix.ProductFamily, productFamily.created_by);
    return await Add(_tableName, _primaryKey, productFamily, callback);
}

let UpdateProductFamilyData = async (key, productFamily, callback) => {
    productFamily = UpdateDetaultValues(productFamily, productFamily.modified_by);
    return await Edit(_tableName, _primaryKey, key, productFamily, callback);
}

let DeleteProductFamilyData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetProductFamilyDataById, GetAllProductFamiliesData, SaveProductFamilyData, UpdateProductFamilyData, DeleteProductFamilyData };

//#endregion