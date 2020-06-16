import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'

const Figures = ({ data }) => {
  console.log(data)
  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Figures">
        <div>omg</div>
      </ProductPageContainer>
    </Container>
  )
}

export default Figures
const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
export const FiguresProductCategoryQuery = graphql`
  query FiguresProductCategoryQuery {
      figureProducts: allMarkdownRemark(
        filter: { frontmatter: { merchandise: { eq: "figure" } } }
      ) {
        edges {
          node {
            frontmatter {
              asin
              name
              displayName
              producttype
              series
              color
              image {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              pricings {
                quantity
                price
              }
              weight
              preorder(formatString: "MMM DD")
              release(formatString: "MMM DD")
              merchandise
            }
          }
        }
      }
    }
`
