import { GetAllProductFamilys, AddProductFamily, UpdateProductFamily, DeleteProductFamily } from 'api/Core/ProductFamilyManager';

let AddProductFamilyAPI = async (productFamily, callback) => {
    return await AddProductFamily(productFamily, callback);
};

let UpdateProductFamilyAPI = async (productFamilyId, productFamily, callback) => {
    return await UpdateProductFamily(productFamilyId, productFamily, callback);
};

let DeleteProductFamilyAPI = async (productFamilyId, callback) => {
    return await DeleteProductFamily(productFamilyId, callback);
};

let GetProductFamilysAPI = async (filter, callback) => {
    return await GetAllProductFamilys(filter, callback);
};

export { AddProductFamilyAPI, UpdateProductFamilyAPI, DeleteProductFamilyAPI, GetProductFamilysAPI };