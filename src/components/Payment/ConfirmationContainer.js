import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { Container, Row } from 'react-bootstrap'
import CheckoutProgress from '../Checkout/CheckoutProgress'


class ConfirmationContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <CheckoutProgress orderContext={this.props.orderContext} phase={4} />
        </Row>
      </Container>
    )
  }
}

export default ConfirmationContainer
