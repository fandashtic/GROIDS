const functions = require('firebase-functions');

const { GetManufacturesAPI } = require('./src/Controller/Shared/ManufactureController');
const { ReturnObject } = require('./src/Shared/Util');
const { SendEmail } = require('./src/Shared/SendEmail');
var config = require('./appConfig.json');

exports.GetManufactures = functions.https.onRequest((request, response) => {
  GetManufacturesAPI(request.body.filter, (data, err) => {
    if (data) {
      response.send(data);
    } else {
      response.send(err);
    }
  });
});

exports.SendEmail = functions.https.onRequest((request, response) => {
  SendEmail(request.body.mailOptions, response);
});