import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/Common/seo'
import ConfirmationContainer from '../components/Payment/ConfirmationContainer'

const Confirmation = ({ location }) => {
  return (
    <>
      <SEO title="Confirmation" />
      {typeof window !== "undefined" && location.state === null ? (
        navigate('/cart')
      ) : (
        <ConfirmationContainer orderContext={location.state.orderContext} />
      )}
    </>
  )
}

export default Confirmation
