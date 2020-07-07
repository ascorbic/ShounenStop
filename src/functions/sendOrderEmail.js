require('dotenv').config()
const { SENDGRID_API_KEY } = process.env
const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(SENDGRID_API_KEY)

  const payload = JSON.parse(event.body)
  const orderConfirmation = {
    "personalizations": [
      {
        "to": [
          {
            "email": "jonathanwu70@gmail.com",
            "name": "Jonathan Wu"
          }
        ],
        "dynamic_template_data": payload,
        "subject": "Order Confirmation!"
      }
    ],
    "from": {
      "email": "shounenstop@gmail.com",
      "name": "Shounen Stop"
    },
    "reply_to": {
      "email": "shounenstop@gmail.com",
      "name": "Shounen Stop"
    },
    "template_id": "d-92b3e2e517114c869eb5c7e221ba85e2"
  }

  // console.log(orderConfirmation.personalizations[0].dynamic_template_data)
  // orderConfirmation.personalizations[0].dynamic_template_data.each((data)=>{
  //   console.log(data)
  // })
  Object.keys(orderConfirmation.personalizations[0].dynamic_template_data.productData).map((key)=>{

      console.log(orderConfirmation.personalizations[0].dynamic_template_data.productData[key])

  })
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
    return {
      statusCode: 200,
      body: "context",
    }
  // try {
  //   await sgMail.send(msg)

  //   return {
  //     statusCode: 200,
  //     body: 'Message sent',
  //   }
  // } catch (e) {
  //   return {
  //     statusCode: e.code,
  //     body: e.message,
  //   }
  // }
}
