const { DeCode } = require('./src/Shared/Util');
var AWS = require('aws-sdk');
var config = require('./appConfig.json');

let awsConfig = {
    "region": config.s3.region,
    "endpoint": config.db.endpoint,
    "accessKeyId": DeCode(config.db.key),
    "secretAccessKey": DeCode(config.db.secretkey)
};

//amplify push

AWS.config.update(awsConfig);

let dynamodb = new AWS.DynamoDB();
let docClient = new AWS.DynamoDB.DocumentClient();

module.exports = { docClient, dynamodb };