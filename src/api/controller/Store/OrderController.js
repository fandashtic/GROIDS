
import { GetAllOrders, AddOrder, UpdateOrder, DeleteOrder } from 'api/Controller/Store/node_modules/api/Core/OrderManager';

let AddOrderAPI = async (order, callback) => {
    return await AddOrder(order, callback);
};

let UpdateOrderAPI = async (orderId, order, callback) => {
    return await UpdateOrder(orderId, order, callback);
};

let DeleteOrderAPI = async (orderId, callback) => {
    return await DeleteOrder(orderId, callback);
};

let GetOrdersAPI = async (filter, callback) => {
    return await GetAllOrders(filter, callback);
};

export { AddOrderAPI, UpdateOrderAPI, DeleteOrderAPI, GetOrdersAPI };