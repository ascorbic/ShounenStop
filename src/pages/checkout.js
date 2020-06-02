import React from 'react'

import SEO from '../components/Common/seo'

const Checkout = ({location}) => {
  const { state = {} } = location
  const { modal } = state
  console.log(state)
  return (
    <>
      <SEO title="Checkout" />
    </>
  )
}

export default Checkout
