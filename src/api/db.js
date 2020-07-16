var AWS = require('aws-sdk');
var config = require('./../../src/appConfig.json');

let awsConfig = {
    "region": "us-east-2",
    "endpoint": "https://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": config.db.AWS_ACCESS_KEY_ID,
    "secretAccessKey": config.db.AWS_SECRET_ACCESS_KEY
};

//amplify push

AWS.config.update(awsConfig);

exports.docClient = new AWS.DynamoDB.DocumentClient();