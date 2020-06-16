import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container, Row, Accordion, Card } from 'react-bootstrap'
import ProductCategoryHeader from '../Products/ProductCategoryHeader'

const ProductPageContainer = () => {
  return (
    <Accordion defaultActiveKey="0">
      <div css={filterContainer}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div>
            omg
            <br />
            omg
          </div>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </div>
    </Accordion>
  )
}

export default ProductPageContainer

const productContentContainer = css`
  margin-top: 10px;
`

const filterContainer = css`
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);
  border-radius: 12px;
`

const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
