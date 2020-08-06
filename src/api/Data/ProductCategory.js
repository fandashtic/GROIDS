import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'productcategories';
const _primaryKey = 'product_category_id';

//#region

let GetProductCategoryDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllProductCategoriesData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveProductCategoryData = async (productcategory, callback) => {
    productcategory = AddDetaultValues(productcategory, 'product_category_id', PreFix.ProductCategory, productcategory.created_by);
    return await Add(_tableName, _primaryKey, productcategory, callback);
}

let UpdateProductCategoryData = async (key, productcategory, callback) => {
    productcategory = UpdateDetaultValues(productcategory, productcategory.modified_by);
    return await Edit(_tableName, _primaryKey, key, productcategory, callback);
}

let DeleteProductCategoryData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetProductCategoryDataById, GetAllProductCategoriesData, SaveProductCategoryData, UpdateProductCategoryData, DeleteProductCategoryData };

//#endregion