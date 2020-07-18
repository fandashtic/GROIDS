
import { GetAllInventorys, AddInventory, UpdateInventory, DeleteInventory } from 'api/Core/InventoryManager';

let AddInventoryAPI = async (inventory, callback) => {
    return await AddInventory(inventory, callback);
};

let UpdateInventoryAPI = async (inventoryId, inventory, callback) => {
    return await UpdateInventory(inventoryId, inventory, callback);
};

let DeleteInventoryAPI = async (inventoryId, callback) => {
    return await DeleteInventory(inventoryId, callback);
};

let GetInventorysAPI = async (filter, callback) => {
    return await GetAllInventorys(filter, callback);
};

export { AddInventoryAPI, UpdateInventoryAPI, DeleteInventoryAPI, GetInventorysAPI };