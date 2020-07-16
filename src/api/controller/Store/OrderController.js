
var { GetAllOrders, AddOrder, UpdateOrder, DeleteOrder } = require('./../Core/OrderManager');

exports.AddOrder = async (order, callback) => {
    return await AddOrder(order, callback);
};

exports.UpdateOrder = async (orderId, order, callback) => {
    return await UpdateOrder(orderId, order, callback);
};

exports.DeleteOrder = async (orderId, callback) => {
    return await DeleteOrder(orderId, callback);
};

exports.GetOrders = async (filter, callback) => {
    return await GetAllOrders( filter, callback);
};