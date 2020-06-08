import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/Common/seo'
import CheckoutContainer from '../components/Checkout/CheckoutContainer'

const Checkout = ({ location }) => {
  return (
    <>
      <SEO title="Checkout" />
      {typeof window !== 'undefined' &&
        (location.state === null ? (
          navigate('/cart')
        ) : (
          <CheckoutContainer orderContext={location.state.orderContext} />
        ))}
    </>
  )
}

export default Checkout
