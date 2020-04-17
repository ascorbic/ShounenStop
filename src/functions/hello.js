require('dotenv').config();

const FIRESTORE_KEY = process.env.FIRESTORE_KEY;
// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
    console.log("queryStringParameters", event.queryStringParameters)
    callback(null, {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: "Hello, World! "+ FIRESTORE_KEY + Math.round(Math.random() * 10),
      }),
    })
  }