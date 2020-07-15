var AWS = require('aws-sdk');

let awsConfig = {
    "region": "us-east-2",
    "endpoint": "https://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIA5O6WF24TRCXACIMP",
    "secretAccessKey": "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"
};

// "accessKeyId": "AKIA5O6WF24TRCXACIMP",
// "secretAccessKey": "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"

//amplify push

AWS.config.update(awsConfig);

exports.docClient = new AWS.DynamoDB.DocumentClient();