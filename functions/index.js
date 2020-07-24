const functions = require('firebase-functions');
var nodemailer = require('nodemailer');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info.fandashtic@gmail.com',
      pass: '%%f%H*t2PW6R'
    }
  });
  
  var mailOptions = {
    from: 'info.fandashtic@gmail.com',
    to: 'info.fandashtic@gmail.com',
    subject: 'Sending Email using Grodis',
    text: 'Hello Grodis!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  response.send("Hello from Firebase!");
});
