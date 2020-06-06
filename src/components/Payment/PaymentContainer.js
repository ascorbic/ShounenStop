import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { Container, Row } from 'react-bootstrap'
import ContextConsumer from '../LayoutItems/CartContext'
import CheckoutProgress from '../Checkout/CheckoutProgress'

const PaymentContainer = ({orderContext}) => {

  return (
    <ContextConsumer>
      {context => {
        
        return (
          <Container fluid>
            <Row>
              <CheckoutProgress orderContext={orderContext} phase={3} />
            </Row>
          </Container>
        )
      }}
    </ContextConsumer>
  )
}

export default PaymentContainer
