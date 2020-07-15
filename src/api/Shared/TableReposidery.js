var { docClient } = require('./../db');
var { GetUpdateExpressionAndAttributeValuesAndNames, ReturnObject, GetKey } = require('./../Shared/Util');

exports.GetById = async (tableName, keyColumn, keyValue, res) => {
    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue)
    };

    return await docClient.get(params, function (err, data) {
        ReturnObject(res, err, data, 'GetById');
    });
};

exports.GetAll = async (tableName, filter, res) => {
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
            data.Items.forEach(function(itemdata) {
                array.push(itemdata);
            });
    
            // continue scanning if we have more items
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }

            ReturnObject(res, err, array, 'GetAll');
        }
    }
};

exports.Add = async (tableName, tableData, res) => {
    var params = {
        TableName: tableName,
        Item:  tableData
    };

    return await docClient.put(params, function (err, data) {
        ReturnObject(res, err, data, 'Add');
    });
}

exports.Update = async (tableName, keyColumn, keyValue, tableData, res) => { 
    let data = GetUpdateExpressionAndAttributeValuesAndNames(tableData, 1);
    
    var params = {
        TableName:tableName,
        Key: GetKey(keyColumn, keyValue),
        UpdateExpression: data.expression, // "set updated_by = :updated_by, is_deleted = :is_deleted",
        ExpressionAttributeValues: data.attributeValues,
        ReturnValues: "UPDATED_NEW"
    };

    return await docClient.update(params, function (err, data) {
        ReturnObject(res, err, data, 'Update');
    });
}

exports.Delete = async (tableName, keyColumn, keyValue, res) =>
{
    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue)
    };
    docClient.delete(params, function (err, data) {
        ReturnObject(res, err, data, 'Delete');
    });
};