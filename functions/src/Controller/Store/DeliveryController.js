
const{ GetAllDeliverys, AddDelivery, UpdateDelivery, DeleteDelivery } = require('./../../Core/DeliveryManager');

let AddDeliveryAPI = async (delivery, callback) => {
    return await AddDelivery(delivery, callback);
};

let UpdateDeliveryAPI = async (deliveryId, delivery, callback) => {
    return await UpdateDelivery(deliveryId, delivery, callback);
};

let DeleteDeliveryAPI = async (deliveryId, callback) => {
    return await DeleteDelivery(deliveryId, callback);
};

let GetDeliverysAPI = async (filter, callback) => {
    return await GetAllDeliverys(filter, callback);
};

module.exports = { AddDeliveryAPI, UpdateDeliveryAPI, DeleteDeliveryAPI, GetDeliverysAPI };