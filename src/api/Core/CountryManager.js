import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Country';

let IsCountryValid = async (countryName, password, callback) => {
    return await GetById(countryName, async (country) => {
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

let AddCountry = async (country, callback) => {
    return await Save(country, async (country) => {
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

let UpdateCountry = async (key, country, callback) => { 
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

let DeleteCountry = async (key, callback) =>
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

let GetCountry = async (countryName, callback) => {
    return await GetById(countryName, async (country) => {
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

let GetAllCountrys = async (filter, callback) => {
    return await GetAll(filter, async (countrys) => {
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

export { IsCountryValid, AddCountry, UpdateCountry, DeleteCountry, GetCountry, GetAllCountrys };