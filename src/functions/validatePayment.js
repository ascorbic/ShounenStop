/** Production Postback URL */
const PRODUCTION_VERIFY_URI = "https://ipnpb.paypal.com/cgi-bin/webscr";
/** Sandbox Postback URL */
const SANDBOX_VERIFY_URI = "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";

const sandbox = true;

function getPaypalURI() {
  return sandbox ? SANDBOX_VERIFY_URI : PRODUCTION_VERIFY_URI;
}

const axios = require('axios');

exports.handler =  async function(event, context, callback) {

  if(req.method != "POST"){
    res.sendStatus(500)
  }

  let res = {
    statusCode: 200,
    body: "OK"
  }
  
  callback(null, res);

  let postreq = 'cmd=_notify-validate&' + event.body;

  Object.keys(body).map((key) => {
    postreq = `${postreq}&${key}=${body[key]}`;
    return key;
  });


  let options = {
    method: 'POST',
    url   : getPaypalURI(),
    headers: {
      'Content-Length': postreq.length,
    },
    encoding: 'utf-8',
    data: postreq,
    rejectUnauthorized: false,
    agent: false
  };

  const promise = await new Promise((resolve, reject) => {
    axios(options)
      .then(function (response) {
        let resBody = response.data;
        console.log('Response Body: ' + resBody);

        if (resBody.substring(0, 8) === 'VERIFIED') {
          
          // Check firestore
          //google 

          resolve(response);
        } else if (resBody.substring(0, 7) === 'INVALID') {
          resolve(response);
          // reject(new Error('IPN Message is invalid.'));
        } else {
          // reject(new Error('Unexpected response body.'));
        }
        // console.log(response);
      }).catch(function (error) {
        console.log("error");
        console.log(error);
        reject(new Error(error));
    });
  });
  return promise;
}