var AWS = require('aws-sdk');
var config = require('appConfig.json');

let awsConfig = {
    "region": config.s3.region,
    "endpoint": config.db.endpoint,
    "accessKeyId": config.db.ACCESS_KEY_ID,
    "secretAccessKey": config.db.SECRET_ACCESS_KEY
};

//amplify push

AWS.config.update(awsConfig);

let dynamodb = new AWS.DynamoDB();
let docClient = new AWS.DynamoDB.DocumentClient();

export { docClient, dynamodb };