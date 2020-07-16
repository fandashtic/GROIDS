var { GetAllDeliverys, GetDeliveryById, Add, Update, Delete } = require('./../Data/Delivery');

exports.IsDeliveryValid = async (deliveryName, password, callback) => {
    return await GetDeliveryById(deliveryName, async (delivery) => {
        if (delivery.password === password) {
            return await callback({
                'data': {
                    DeliveryName: delivery.deliveryName,
                    DeliveryDisplayName: delivery.firstName + ' ' + delivery.lastName,
                    DeliveryType: delivery.deliveryType,
                    CompanyId: delivery.companyId,
                    StoreId: delivery.storeId,
                    DeliveryProfileImage: delivery.profileImageUrl
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

exports.AddDelivery = async (delivery, callback) => {
    return await Add(delivery, async (delivery) => {
        if (delivery) {
            return await callback({
                'data':delivery,
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

exports.UpdateDelivery = async (key, delivery, callback) => { 
    return await Update(key, delivery, async (delivery) => {
        if (delivery) {
            return await callback({
                'data':delivery,
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

exports.DeleteDelivery = async (key, callback) =>
{
    return await Delete(key, async (delivery) => {
        if (delivery) {
            return await callback({
                'data':delivery,
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

exports.GetDelivery = async (deliveryName, callback) => {
    return await GetDeliveryById(deliveryName, async (delivery) => {
        if (delivery) {
            return await callback({
                'data':delivery,
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

exports.GetAllDeliverys = async (filter, callback) => {
    return await GetAllDeliverys(filter, async (deliverys) => {
        if (deliverys) {
            return await callback({
                'data':deliverys,
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
