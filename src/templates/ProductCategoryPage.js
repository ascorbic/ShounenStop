import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductCategoryHeader from '../components/Products/ProductCategoryHeader'

const ProductCategoryPage = ({ data }) => {
  console.log(data)
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
export const ProductCategoryTemplateQuery = graphql`
query ProductCategoryPageQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      name,
      asin,
      producttype,
      series,
      color,
      image {
        childImageSharp {
          fluid(maxWidth: 500, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pricings{
        quantity,
        price
      },
      weight,
      preorder(formatString:"MMM DD"),
      release(formatString:"MMM DD"),
      
    }
  }
}
`;
