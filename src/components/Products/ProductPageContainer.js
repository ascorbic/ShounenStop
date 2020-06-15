import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container, Row, Accordion, Card } from 'react-bootstrap'
import ProductCategoryHeader from '../Products/ProductCategoryHeader'

const ProductPageContainer = () => {
  return (
    <Container css={productPageContainer} fluid>
      <ProductCategoryHeader />
      <Row>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Accordion defaultActiveKey="2">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12">
          stuff2
        </div>
        {/* <div
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
        </div> */}
      </Row>
    </Container>
  )
}

export default ProductPageContainer

const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
