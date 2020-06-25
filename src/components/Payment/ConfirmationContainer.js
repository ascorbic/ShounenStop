import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container, Row } from 'react-bootstrap'
import CheckoutProgress from '../Checkout/CheckoutProgress'
import CheckoutHeader from '../Checkout/CheckoutHeader'
import ContextConsumer from '../LayoutItems/CartContext'

const ConfirmationContainer = ({ orderContext }) => {
  const checkmarkImageData = useStaticQuery(query).checkmarkImage
    .childImageSharp.fluid
  
  return (
    <Container fluid>
      <Row css={shiftRight}>
        <CheckoutProgress orderContext={orderContext} phase={4} />
      </Row>
      <Row>
        <div
          css={confirmationContainer}
          className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <CheckoutHeader
            header="Confirmation"
            headerNavigate={() => {
              navigate('/')
            }}
          />
          <div css={receiptContainer}>
            <div css={receiptHeader}>
              <div>Your Order Has Been Placed</div>
              <Img css={checkmarkImage} fluid={checkmarkImageData}></Img>
            </div>
            <div css={thanksContainer}></div>
            <div css={receiptInner}></div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default ConfirmationContainer

const thanksContainer = css`
  
`

const checkmarkImage = css`
  width: 25px;
  margin-left: 8px;
  margin-top: -3px;
`

const shiftRight = css`
  // margin-left: 5px;
`
const receiptHeader = css`
  display: flex;
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  // padding-right:5px;
  font-size: 24px;
  align-items: center;
  justify-content: center;
`
const receiptInner = css``

const confirmationContainer = css``

const receiptContainer = css`
  width: 100%;
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  // padding-left: 10px;
  // padding-right: 10px;
  padding-bottom: 10px;

  border-radius: 12px;
  font-size: 15px;
  background-color: #fff;
`

export const query = graphql`
  query {
    checkmarkImage: file(relativePath: { eq: "checkmarkFilled.png" }) {
      childImageSharp {
        fluid(maxWidth: 512, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
