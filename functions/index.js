const functions = require('firebase-functions');
const { GetManufacturesAPI } = require('./src/Controller/Shared/ManufactureController');
const { ReturnObject, EnCode } = require('./src/Shared/Util');
const { SendEmail } = require('./src/Shared/SendEmail');
var config = require('./appConfig.json');

exports.GetManufactures = functions.https.onRequest((request, response) => {
  console.log(request.body);
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetManufacturesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  }else{
    response.send(request.body);
  }
});

exports.SendEmail = functions.https.onRequest((request, response) => {
  SendEmail(request.body.mailOptions, response);
});

let ResponseAPI = (response, data, err) => {
  if(data){
    return response.send(EnCode(JSON.stringify(data)));
  }else{
    return response.send(EnCode(JSON.stringify(err)));
  }
};