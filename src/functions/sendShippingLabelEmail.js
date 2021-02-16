require('dotenv').config()
const { SENDGRID_API_KEY } = process.env
const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context, callback) => {
  sgMail.setApiKey(SENDGRID_API_KEY)

  const payload = JSON.parse(event.body)
  const customerEmail = payload.userInfo.email
  const customerName = payload.userInfo.firstName + " " + payload.userInfo.lastName

  const orderInformationStore = {
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
      name: customerName,
    },
    template_id: 'd-7ccebcdda57b4ffb88d2bc21407cc1f5',
  }


  // console.log(orderConfirmation.personalizations[0].dynamic_template_data)
  // orderConfirmation.personalizations[0].dynamic_template_data.each((data)=>{
  //   console.log(data)
  // })

  console.log(
    JSON.stringify(
      orderConfirmationStore.personalizations[0].dynamic_template_data,
      null,
      20
    )
  )
  Object.keys(
    orderConfirmationStore.personalizations[0].dynamic_template_data.productData
  ).map(key => {
    // console.log(orderConfirmation.personalizations[0].dynamic_template_data.productData[key])
  })
  
  try {
    await sgMail.send(orderInformationStore)

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
