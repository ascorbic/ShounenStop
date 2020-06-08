import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/Common/seo'
import PaymentContainer from '../components/Payment/PaymentContainer'
import { render } from 'react-dom'

const Payment = ({ location }) => {
  render
  return (
    <>
      <SEO title="Checkout" />
      {typeof window !== 'undefined' &&
        (location.state === null ? (
          navigate('/cart')
        ) : (
          <PaymentContainer orderContext={location.state.orderContext} />
        ))}
    </>
  )
}

export default Payment
