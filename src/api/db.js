var AWS = require('aws-sdk');
var config = require('./../../src/appConfig.json');

let awsConfig = {
    "region": "us-east-2",
    "endpoint": "https://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": config.db.ACCESS_KEY_ID,
    "secretAccessKey": config.db.SECRET_ACCESS_KEY
};

//amplify push

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

export { docClient };