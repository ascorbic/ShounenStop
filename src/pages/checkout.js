import React from 'react'

import SEO from '../components/Common/seo'
import CheckoutContainer from '../components/Checkout/CheckoutContainer'



const Checkout = ({location}) => {
  console.log(location.state)
  return (
    <>
      <SEO title="Checkout" />
      <CheckoutContainer orderContext={location.state}/>
    </>
  )
}

export default Checkout
