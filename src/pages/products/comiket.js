import React from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'
import ComiketProductCard from '../../components/Comiket/ComiketProductCard'

// const cardClassName = 'col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6'
const cardClassName = 'card'

const Comiket = ({ data, location }) => {
  
  const comiketProductData = data.comiketProducts.edges
  console.log(comiketProductData)
  console.log(location)
  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Comiket">
        {comiketProductData.map(edge => (
          <ComiketProductCard
            key={edge.node.frontmatter.asin}
            cardClassName={cardClassName}
            imgData={edge.node.frontmatter.image.childImageSharp.fluid}

            />
        ))}
      </ProductPageContainer>
    </Container>
  )
}

export default Comiket

const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
export const ComiketProductCategoryQuery = graphql`
  query ComiketProductCategoryQuery {
    comiketProducts: allMarkdownRemark(
      filter: { frontmatter: { merchandise: { eq: "comiket" } } }
    ) {
      edges {
        node {
          frontmatter {
            asin
            producttype
            eventName
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
            merchandise
          }
        }
      }
    }
  }
`
