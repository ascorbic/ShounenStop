/*const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

exports.HandleIPN = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';

  res.set('Access-Control-Allow-Origin', 'https://google.com');
  res.set('Access-Control-Allow-Methods', 'GET');
	listFiles("value-ease").catch(console.error);
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Headers', 'Authorization');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  }
  else{
    console.log(req.body);
    console.log(req.get('content-type'));
    res.status(200).send(message);
  }

};

async function listFiles(bucketName) {
  // Lists files in the bucket
  const [files] = await storage.bucket(bucketName).getFiles();

  console.log('Files:');
  files.forEach(file => {
    console.log(file.name);
  });
}*/

/** Production Postback URL */
const PRODUCTION_VERIFY_URI = "https://ipnpb.paypal.com/cgi-bin/webscr";
/** Sandbox Postback URL */
const SANDBOX_VERIFY_URI = "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";

const sandbox = true;

function getPaypalURI() {
  return sandbox ? SANDBOX_VERIFY_URI : PRODUCTION_VERIFY_URI;
}

exports.handler =  async function(event, context, callback) {
  let res = {
    statusCode: 200,
    body: "OK"
  }
  
  callback(null, res);

  let postreq = 'cmd=_notify-validate&' + event.body;

  const axios = require('axios');
  let options = {
    method: 'POST',
    url   : getPaypalURI(),
    headers: {
      'Content-Length': postreq.length,
    },
    encoding: 'utf-8',
    data: postreq,
    strictSSL: true,
    rejectUnauthorized: false,
    agent: false
  };

  const promise = await new Promise((resolve, reject) => {
    axios(options)
      .then(function (response) {
        let resBody = response.data;
        console.log('Response Body: ' + resBody);

        if (resBody.substring(0, 8) === 'VERIFIED') {
          resolve(response);
          console.log("this was verified");
        } else if (resBody.substring(0, 7) === 'INVALID') {
          resolve(response);
          console.log("this was invalid");
          // reject(new Error('IPN Message is invalid.'));
        } else {
          // reject(new Error('Unexpected response body.'));
        }
        // console.log(response);
      }).catch(function (error) {
        console.log("error");
        console.log(error);
        // reject(new Error(error));
    });
  });
  return promise;
}