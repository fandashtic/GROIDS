var { GetAllCountrys, GetCountryById, Add, Update, Delete } = require('./../Data/Country');

exports.IsCountryValid = async (countryName, password, callback) => {
    return await GetCountryById(countryName, async (country) => {
        if (country.password === password) {
            return await callback({
                'data': {
                    CountryName: country.countryName,
                    CountryDisplayName: country.firstName + ' ' + country.lastName,
                    CountryType: country.countryType,
                    CompanyId: country.companyId,
                    StoreId: country.storeId,
                    CountryProfileImage: country.profileImageUrl
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

exports.AddCountry = async (country, callback) => {
    return await Add(country, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

exports.UpdateCountry = async (key, country, callback) => { 
    return await Update(key, country, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

exports.DeleteCountry = async (key, callback) =>
{
    return await Delete(key, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

exports.GetCountry = async (countryName, callback) => {
    return await GetCountryById(countryName, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

exports.GetAllCountrys = async (filter, callback) => {
    return await GetAllCountrys(filter, async (countrys) => {
        if (countrys) {
            return await callback({
                'data':countrys,
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
