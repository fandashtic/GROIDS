var { GetAllCompanys, GetCompanyById, Add, Update, Delete } = require('./../Data/Company');

exports.IsCompanyValid = async (companyName, password, callback) => {
    return await GetCompanyById(companyName, async (company) => {
        if (company.password === password) {
            return await callback({
                'data': {
                    CompanyName: company.companyName,
                    CompanyDisplayName: company.firstName + ' ' + company.lastName,
                    CompanyType: company.companyType,
                    CompanyId: company.companyId,
                    StoreId: company.storeId,
                    CompanyProfileImage: company.profileImageUrl
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

exports.AddCompany = async (company, callback) => {
    return await Add(company, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

exports.UpdateCompany = async (key, company, callback) => { 
    return await Update(key, company, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

exports.DeleteCompany = async (key, callback) =>
{
    return await Delete(key, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

exports.GetCompany = async (companyName, callback) => {
    return await GetCompanyById(companyName, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

exports.GetAllCompanys = async (filter, callback) => {
    return await GetAllCompanys(filter, async (companys) => {
        if (companys) {
            return await callback({
                'data':companys,
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
