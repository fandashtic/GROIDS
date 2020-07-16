
var { GetAllDeliverys, IsDeliveryValid, AddDelivery, UpdateDelivery, DeleteDelivery } = require('./../Core/DeliveryManager');

exports.IsDeliveryValid = async (deliveryName, password, callback) => {
    return await IsDeliveryValid(deliveryName, password, callback);
};

exports.AddDelivery = async (delivery, callback) => {
    return await AddDelivery(delivery, callback);
};

exports.UpdateDelivery = async (deliveryId, delivery, callback) => {
    return await UpdateDelivery(deliveryId, delivery, callback);
};

exports.DeleteDelivery = async (deliveryId, callback) => {
    return await DeleteDelivery(deliveryId, callback);
};

exports.GetDeliverys = async (filter, callback) => {
    return await GetAllDeliverys( filter, callback);
};