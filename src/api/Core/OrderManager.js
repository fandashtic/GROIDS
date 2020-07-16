var { GetAllOrders, GetOrderById, Add, Update, Delete } = require('./../Data/Order');

exports.IsOrderValid = async (orderName, password, callback) => {
    return await GetOrderById(orderName, async (order) => {
        if (order.password === password) {
            return await callback({
                'data': {
                    OrderName: order.orderName,
                    OrderDisplayName: order.firstName + ' ' + order.lastName,
                    OrderType: order.orderType,
                    CompanyId: order.companyId,
                    StoreId: order.storeId,
                    OrderProfileImage: order.profileImageUrl
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

exports.AddOrder = async (order, callback) => {
    return await Add(order, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

exports.UpdateOrder = async (key, order, callback) => { 
    return await Update(key, order, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

exports.DeleteOrder = async (key, callback) =>
{
    return await Delete(key, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

exports.GetOrder = async (orderName, callback) => {
    return await GetOrderById(orderName, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

exports.GetAllOrders = async (filter, callback) => {
    return await GetAllOrders(filter, async (orders) => {
        if (orders) {
            return await callback({
                'data':orders,
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
