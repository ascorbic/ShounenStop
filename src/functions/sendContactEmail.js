require('dotenv').config()
const { SENDGRID_API_KEY } = process.env
const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(SENDGRID_API_KEY)

  const payload = JSON.parse(event.body)
  const customerEmail = payload.email
  const contactMessageCustomer = {
    personalizations: [
      {
        to: [
          {
            email: customerEmail,
            name: 'Jonathan Wu',
          },
        ],
        dynamic_template_data: payload,
        subject: 'Order Confirmation!',
      },
    ],
    from: {
      email: 'shounenstop@gmail.com',
      name: 'Shounen Stop',
    },
    reply_to: {
      email: 'shounenstop@gmail.com',
      name: 'Shounen Stop',
    },
    template_id: 'd-9e0cac89ef90474e9175b7f15140876f',
  }

  const contactMessageStore = {
    personalizations: [
      {
        to: [
          {
            email: 'shounenstop@gmail.com',
            name: 'Shounen Stop',
          },
        ],
        dynamic_template_data: payload,
        subject: 'Order Confirmation!',
      },
    ],
    from: {
      email: 'shounenstop@gmail.com',
      name: 'Shounen Stop',
    },
    reply_to: {
      email: customerEmail,
      name: 'Jonathan Wu',
    },
    template_id: 'd-9e0cac89ef90474e9175b7f15140876f',
  }

  console.log(
    JSON.stringify(
      contactMessageCustomer.personalizations[0].dynamic_template_data,
      null,
      20
    )
  )

  try {
    await sgMail.send(contactMessageCustomer)
    await sgMail.send(contactMessageStore)

    return {
      statusCode: 200,
      body: 'Message sent',
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}
