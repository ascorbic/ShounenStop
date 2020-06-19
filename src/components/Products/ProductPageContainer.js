import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container, Row } from 'react-bootstrap'
import ProductCategoryHeader from '../Products/ProductCategoryHeader'
import FilterAllProducts from '../Products/FilterAllProducts'

const ProductPageContainer = ({ selectedProductCategory, productHeaderSubtitle, children }) => {
  return (
    <Container css={containerNoPadding} fluid>
      <ProductCategoryHeader
        selectedProductCategory={selectedProductCategory}
      />
      <Row css={productContentContainer}>
        {children}
      </Row>
    </Container>
  )
}

export default ProductPageContainer

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
`


const productContentContainer = css`
  margin-top: 0px;
  margin-bottom:20px;
  margin-right: 0;
  margin-left: 0;
`
