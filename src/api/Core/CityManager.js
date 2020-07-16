var { GetAllCitys, GetCityById, Add, Update, Delete } = require('./../Data/City');

exports.IsCityValid = async (cityName, password, callback) => {
    return await GetCityById(cityName, async (city) => {
        if (city.password === password) {
            return await callback({
                'data': {
                    CityName: city.cityName,
                    CityDisplayName: city.firstName + ' ' + city.lastName,
                    CityType: city.cityType,
                    CompanyId: city.companyId,
                    StoreId: city.storeId,
                    CityProfileImage: city.profileImageUrl
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

exports.AddCity = async (city, callback) => {
    return await Add(city, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

exports.UpdateCity = async (key, city, callback) => { 
    return await Update(key, city, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

exports.DeleteCity = async (key, callback) =>
{
    return await Delete(key, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

exports.GetCity = async (cityName, callback) => {
    return await GetCityById(cityName, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

exports.GetAllCitys = async (filter, callback) => {
    return await GetAllCitys(filter, async (citys) => {
        if (citys) {
            return await callback({
                'data':citys,
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
