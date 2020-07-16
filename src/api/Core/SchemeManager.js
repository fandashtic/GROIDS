var { GetAllSchemes, GetSchemeById, Add, Update, Delete } = require('./../Data/Scheme');

exports.IsSchemeValid = async (schemeName, password, callback) => {
    return await GetSchemeById(schemeName, async (scheme) => {
        if (scheme.password === password) {
            return await callback({
                'data': {
                    SchemeName: scheme.schemeName,
                    SchemeDisplayName: scheme.firstName + ' ' + scheme.lastName,
                    SchemeType: scheme.schemeType,
                    CompanyId: scheme.companyId,
                    StoreId: scheme.storeId,
                    SchemeProfileImage: scheme.profileImageUrl
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

exports.AddScheme = async (scheme, callback) => {
    return await Add(scheme, async (scheme) => {
        if (scheme) {
            return await callback({
                'data':scheme,
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

exports.UpdateScheme = async (key, scheme, callback) => { 
    return await Update(key, scheme, async (scheme) => {
        if (scheme) {
            return await callback({
                'data':scheme,
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

exports.DeleteScheme = async (key, callback) =>
{
    return await Delete(key, async (scheme) => {
        if (scheme) {
            return await callback({
                'data':scheme,
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

exports.GetScheme = async (schemeName, callback) => {
    return await GetSchemeById(schemeName, async (scheme) => {
        if (scheme) {
            return await callback({
                'data':scheme,
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

exports.GetAllSchemes = async (filter, callback) => {
    return await GetAllSchemes(filter, async (schemes) => {
        if (schemes) {
            return await callback({
                'data':schemes,
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
