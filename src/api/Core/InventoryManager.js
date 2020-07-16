var { GetAllInventorys, GetInventoryById, Add, Update, Delete } = require('./../Data/Inventory');

exports.IsInventoryValid = async (inventoryName, password, callback) => {
    return await GetInventoryById(inventoryName, async (inventory) => {
        if (inventory.password === password) {
            return await callback({
                'data': {
                    InventoryName: inventory.inventoryName,
                    InventoryDisplayName: inventory.firstName + ' ' + inventory.lastName,
                    InventoryType: inventory.inventoryType,
                    CompanyId: inventory.companyId,
                    StoreId: inventory.storeId,
                    InventoryProfileImage: inventory.profileImageUrl
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

exports.AddInventory = async (inventory, callback) => {
    return await Add(inventory, async (inventory) => {
        if (inventory) {
            return await callback({
                'data':inventory,
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

exports.UpdateInventory = async (key, inventory, callback) => { 
    return await Update(key, inventory, async (inventory) => {
        if (inventory) {
            return await callback({
                'data':inventory,
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

exports.DeleteInventory = async (key, callback) =>
{
    return await Delete(key, async (inventory) => {
        if (inventory) {
            return await callback({
                'data':inventory,
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

exports.GetInventory = async (inventoryName, callback) => {
    return await GetInventoryById(inventoryName, async (inventory) => {
        if (inventory) {
            return await callback({
                'data':inventory,
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

exports.GetAllInventorys = async (filter, callback) => {
    return await GetAllInventorys(filter, async (inventorys) => {
        if (inventorys) {
            return await callback({
                'data':inventorys,
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
