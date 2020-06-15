import React from 'react'
import Layout from '../components/LayoutItems/Layout'

import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductCategoryHeader from '../components/Products/ProductCategoryHeader'

const ProductCategoryPage = ({ data }) => {
  return (
    <Container css={productPageContainer} fluid>
      <ProductCategoryHeader />
    </Container>
  )
}

export default ProductCategoryPage
const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
