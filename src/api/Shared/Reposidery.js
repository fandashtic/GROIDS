import { docClient, 
   // dynamodb
 } from 'api/db';
import { GetUpdateExpressionAndAttributeValuesAndNames, ReturnObject, GetKey, 
    //SortByCreatedOn 
} from 'api/Shared/Util';

// let CreateTable = async (tableName, keyColumn, callback) => {
//     var params = {
//         TableName: tableName,
//         KeySchema: [
//             { AttributeName: keyColumn, KeyType: "HASH" }
//         ],
//         AttributeDefinitions: [],
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 5,
//             WriteCapacityUnits: 5
//         }
//     };

//     dynamodb.createTable(params, callback);
// }

let Get = async (tableName, keyColumn, keyValue, callback) => {
    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue)
    };

    return await docClient.get(params, function (err, data) {
        ReturnObject(callback, err, data, 'GetById');
    });
};

let All = async (tableName, filter, callback) => {
    let array = [];
    let data = GetUpdateExpressionAndAttributeValuesAndNames(filter, 0);

    var params = {
        TableName: tableName,
        FilterExpression: data.expression,
        ExpressionAttributeNames: data.names,
        ExpressionAttributeValues: data.attributeValues
    };

    docClient.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            data.Items.forEach(function (itemdata) {
                array.push(itemdata);
            });

            // continue scanning if we have more items
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }

            ReturnObject(callback, err, array, 'GetAll');
        }
    }
};

let Add = async (tableName, keyColumn, tableData, callback) => {
    var params = {
        TableName: tableName,
        Item: tableData
    };

    //CreateTable(tableName, keyColumn, async () => {
    return await docClient.put(params, function (err, data) {
        ReturnObject(callback, err, data, 'Add');
    });
    //})
}

let Edit = async (tableName, keyColumn, keyValue, tableData, callback) => {
    let data = GetUpdateExpressionAndAttributeValuesAndNames(tableData, 1);

    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue),
        UpdateExpression: data.expression, // "set updated_by = :updated_by, is_deleted = :is_deleted",
        ExpressionAttributeValues: data.attributeValues,
        ReturnValues: "UPDATED_NEW"
    };

    //CreateTable(tableName, keyColumn, async () => {
    return await docClient.update(params, function (err, data) {
        ReturnObject(callback, err, data, 'Update');
    });
    //})    
}

let Remove = async (tableName, keyColumn, keyValue, callback) => {
    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue)
    };
    docClient.delete(params, function (err, data) {
        ReturnObject(callback, err, data, 'Delete');
    });
};

export { Get, All, Add, Edit, Remove };