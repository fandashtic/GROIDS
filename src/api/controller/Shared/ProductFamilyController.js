import { IsProductFamilyValid, AddProductFamily, UpdateProductFamily, DeleteProductFamily, GetProductFamily, GetAllProductFamilies } from 'api/Controller/Shared/node_modules/api/Core/ProductFamilyManager';

let AddProductFamilyAPI = async (productFamily, callback) => {
    return await AddProductFamily(productFamily, callback);
};

let UpdateProductFamilyAPI = async (productFamilyId, productFamily, callback) => {
    return await UpdateProductFamily(productFamilyId, productFamily, callback);
};

let DeleteProductFamilyAPI = async (productFamilyId, callback) => {
    return await DeleteProductFamily(productFamilyId, callback);
};

let GetProductFamiliesAPI = async (filter, callback) => {
    return await GetAllProductFamilies(filter, callback);
};

export { AddProductFamilyAPI, UpdateProductFamilyAPI, DeleteProductFamilyAPI, GetProductFamiliesAPI };