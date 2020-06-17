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
            <div css={productHeaderSubtitleText}>{productHeaderSubtitle}</div>
          </div>
          <div className="row" css={productContentWrapper}>{children}</div>
        </div>
      </Row>
    </Container>
  )
}

export default ProductPageContainer

const productCategoryHeader = css`
  float: left;
  color: #0f346c;
  font-size: 30px;
  font-family: varela round;
`

const productHeaderSubtitleText = css`
  clear: left;
  color: #0f346c;
  font-size: 15px;
  font-family: varela round;
`

const productCategoryHeaderContainer = css`
  position: relative;
  width: 100%;
  padding-left: 10px;
  padding-right:10px;
`

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
`

const productPageContainer = css`
  margin-top: 20px;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`

const productContentWrapper = css`
  margin-top:20px;
  margin-left:0;
  margin-right:0;
  padding-left:10px;
  padding-right:10px;
`

const productContentContainer = css`
  margin-top: 10px;
  margin-right: 0;
  margin-left: 0;
`
