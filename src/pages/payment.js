import React from 'react'

import SEO from '../components/Common/seo'
import PaymentContainer from '../components/Payment/PaymentContainer'



const Payment = ({location}) => {
  return (
    <>
      <SEO title="Checkout" />
      <PaymentContainer orderContext={location.state}/>
    </>
  )
}

export default Payment
