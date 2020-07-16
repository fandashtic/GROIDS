var { GetAllBrands, GetBrandById, Add, Update, Delete } = require('./../Data/Brand');

exports.IsBrandValid = async (brandName, password, callback) => {
    return await GetBrandById(brandName, async (brand) => {
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

exports.AddBrand = async (brand, callback) => {
    return await Add(brand, async (brand) => {
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

exports.UpdateBrand = async (key, brand, callback) => { 
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

exports.DeleteBrand = async (key, callback) =>
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

exports.GetBrand = async (brandName, callback) => {
    return await GetBrandById(brandName, async (brand) => {
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

exports.GetAllBrands = async (filter, callback) => {
    return await GetAllBrands(filter, async (brands) => {
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
