require('dotenv').config()
// const client = require('@sendgrid/client')
const { SENDGRID_API_KEY } = process.env
// client.setApiKey(SENDGRID_API_KEY)
const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(SENDGRID_API_KEY)
  const msg = {
    to: 'test@example.com',
    from: 'shounenstop@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  // const payload = JSON.parse(event.body)
  // const { email, subject } = payload
  // const request = {
  //   method: 'GET',
  //   url: '/v3/api_keys'
  // };
  // client.request(request)
  // .then(([response, body]) => {
  //   console.log(response.statusCode);
  //   console.log(body);
  // })

  // const body = Object.keys(payload)
  //   .map(k => {
  //     return `${k}: ${payload[k]}`
  //   })
  //   .join('<br><br>')

  // const msg = {
  //   to: SENDGRID_TO_EMAIL,
  //   from: 'shounenstop@gmail.com',
  //   subject: subject ? subject : 'Contact Form Submission',
  //   html: body,
  // }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: 'Message sent',
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}
