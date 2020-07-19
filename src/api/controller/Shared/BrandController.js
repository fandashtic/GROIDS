
import { GetAllBrands, GetBrand, AddBrand, UpdateBrand, DeleteBrand, BrandLookUp } from 'api/Core/BrandManager';

let AddBrandAPI = async (brand, callback) => {
    return await AddBrand(brand, callback);
};

let UpdateBrandAPI = async (brand_id, brand, callback) => {
    return await UpdateBrand(brand_id, brand, callback);
};

let DeleteBrandAPI = async (brand_id, callback) => {
    return await DeleteBrand(brand_id, callback);
};

let GetBrandAPI = async (brand_id, callback) => {
    return await GetBrand(brand_id, callback);
};

let GetBrandsAPI = async (filter, callback) => {
    return await GetAllBrands(filter, callback);
};

let BeandLookUpAPI = async (brand_id, callback) => {
    return await BrandLookUp(brand_id, callback);
};

export { AddBrandAPI, UpdateBrandAPI, DeleteBrandAPI, GetBrandsAPI, BeandLookUpAPI, GetBrandAPI };