import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/Common/seo'
import CheckoutContainer from '../components/Checkout/CheckoutContainer'

const Checkout = ({ location }) => {
  console.log(location)
  return (
    <>
      <SEO title="Checkout" />
      {location.state === null ? (
        navigate('/cart')
      ) : (
        <CheckoutContainer orderContext={location.state.orderContext} />
      )}
    </>
  )
}

export default Checkout
