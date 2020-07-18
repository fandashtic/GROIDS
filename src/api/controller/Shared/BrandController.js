
import { GetAllBrands, AddBrand, UpdateBrand, DeleteBrand } from 'api/Controller/Shared/node_modules/api/Core/BrandManager';

let AddBrandAPI = async (brand, callback) => {
    return await AddBrand(brand, callback);
};

let UpdateBrandAPI = async (brandId, brand, callback) => {
    return await UpdateBrand(brandId, brand, callback);
};

let DeleteBrandAPI = async (brandId, callback) => {
    return await DeleteBrand(brandId, callback);
};

let GetBrandsAPI = async (filter, callback) => {
    return await GetAllBrands( filter, callback);
};

export { AddBrandAPI, UpdateBrandAPI, DeleteBrandAPI, GetBrandsAPI };