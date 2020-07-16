var { GetAllCarts, GetCartById, Add, Update, Delete } = require('./../Data/Cart');

exports.IsCartValid = async (cartName, password, callback) => {
    return await GetCartById(cartName, async (cart) => {
        if (cart.password === password) {
            return await callback({
                'data': {
                    CartName: cart.cartName,
                    CartDisplayName: cart.firstName + ' ' + cart.lastName,
                    CartType: cart.cartType,
                    CompanyId: cart.companyId,
                    StoreId: cart.storeId,
                    CartProfileImage: cart.profileImageUrl
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

exports.AddCart = async (cart, callback) => {
    return await Add(cart, async (cart) => {
        if (cart) {
            return await callback({
                'data':cart,
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

exports.UpdateCart = async (key, cart, callback) => { 
    return await Update(key, cart, async (cart) => {
        if (cart) {
            return await callback({
                'data':cart,
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

exports.DeleteCart = async (key, callback) =>
{
    return await Delete(key, async (cart) => {
        if (cart) {
            return await callback({
                'data':cart,
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

exports.GetCart = async (cartName, callback) => {
    return await GetCartById(cartName, async (cart) => {
        if (cart) {
            return await callback({
                'data':cart,
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

exports.GetAllCarts = async (filter, callback) => {
    return await GetAllCarts(filter, async (carts) => {
        if (carts) {
            return await callback({
                'data':carts,
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
