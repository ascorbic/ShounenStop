import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/Common/seo'
import PaymentContainer from '../components/Payment/PaymentContainer'

const Payment = ({ location }) => {
  return (
    <>
      <SEO title="Checkout" />
      {typeof window !== "undefined" && location.state === null ? (
        navigate('/cart')
      ) : (
        <PaymentContainer orderContext={location.state.orderContext} />
      )}
    </>
  )
}

export default Payment
