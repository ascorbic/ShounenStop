import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container, Row, Accordion, Card } from 'react-bootstrap'
import ProductCategoryHeader from '../Products/ProductCategoryHeader'
import FilterAllProducts from '../Products/FilterAllProducts'

const ProductPageContainer = ({ selectedProductCategory, children }) => {
  return (
    <Container css={containerNoPadding} fluid>
      <ProductCategoryHeader
        selectedProductCategory={selectedProductCategory}
      />
      <Row css={productContentContainer}>
        <div
          css={containerNoPadding}
          className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12"
        >
          <FilterAllProducts />
        </div>
        <div
          css={productPageContainer}
          className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12"
        >
          <div css={productCategoryHeaderContainer}>
            <div css={productCategoryHeader}>{selectedProductCategory}</div>
            <div css={productCategoryDivider}></div>
          </div>
          <div className="card-columns" css={productContentWrapper}>{children}</div>
        </div>
      </Row>
    </Container>
  )
}

export default ProductPageContainer

const productCategoryHeader = css`
  float: left;
  color: #0f346c;
  font-size: 26px;
  font-family: varela round;
`
const productCategoryDivider = css`
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #a1bce6;
  clear: both;
`

const productCategoryHeaderContainer = css`
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right:15px;
`

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
`

const productPageContainer = css`
  margin-top: 20px;
  padding-right: 0;
  padding-left: 0;
  // display: flex;
  // flex-wrap: wrap;
`

const productContentWrapper = css`
  width: 100%;
  padding-left:15px;
  padding-right:15px;
`

const productContentContainer = css`
  margin-top: 10px;
  margin-right: 0;
  margin-left: 0;
`
