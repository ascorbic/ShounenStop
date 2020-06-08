import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/Common/seo'
import ConfirmationContainer from '../components/Payment/ConfirmationContainer'

const Confirmation = ({ location }) => {
  return (
    <>
      <SEO title="Confirmation" />
      {location.state === null || location.state === undefined ? (
        navigate('/cart')
      ) : (
        <ConfirmationContainer orderContext={location.state.orderContext} />
      )}
    </>
  )
}

export default Confirmation
