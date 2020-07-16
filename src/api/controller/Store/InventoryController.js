
var { GetAllInventorys, AddInventory, UpdateInventory, DeleteInventory } = require('./../Core/InventoryManager');

exports.AddInventory = async (inventory, callback) => {
    return await AddInventory(inventory, callback);
};

exports.UpdateInventory = async (inventoryId, inventory, callback) => {
    return await UpdateInventory(inventoryId, inventory, callback);
};

exports.DeleteInventory = async (inventoryId, callback) => {
    return await DeleteInventory(inventoryId, callback);
};

exports.GetInventorys = async (filter, callback) => {
    return await GetAllInventorys( filter, callback);
};