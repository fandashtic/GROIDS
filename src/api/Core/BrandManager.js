import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Brand';

let IsBrandValid = async (brandName, password, callback) => {
    return await GetById(brandName, async (brand) => {
        if (brand.password === password) {
            return await callback({
                'data': {
                    BrandName: brand.brandName,
                    BrandDisplayName: brand.firstName + ' ' + brand.lastName,
                    BrandType: brand.brandType,
                    CompanyId: brand.companyId,
                    StoreId: brand.storeId,
                    BrandProfileImage: brand.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let AddBrand = async (brand, callback) => {
    return await Save(brand, async (brand) => {
        if (brand) {
            return await callback({
                'data':brand,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let UpdateBrand = async (key, brand, callback) => { 
    return await Update(key, brand, async (brand) => {
        if (brand) {
            return await callback({
                'data':brand,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let DeleteBrand = async (key, callback) =>
{
    return await Delete(key, async (brand) => {
        if (brand) {
            return await callback({
                'data':brand,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let GetBrand = async (brandName, callback) => {
    return await GetById(brandName, async (brand) => {
        if (brand) {
            return await callback({
                'data':brand,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let GetAllBrands = async (filter, callback) => {
    return await GetAll(filter, async (brands) => {
        if (brands) {
            return await callback({
                'data':brands,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

export { IsBrandValid, AddBrand, UpdateBrand, DeleteBrand, GetBrand, GetAllBrands };