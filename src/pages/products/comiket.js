import React from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'
import ComiketProductCard from '../../components/Comiket/ComiketProductCard'
import FilterProductCategory from '../../components/Products/FilterProductCategory'

const cardClassName = 'row-card'

const Comiket = ({ data, location }) => {
  const comiketProductData = data.comiketProducts.edges
  const addToCartImageData = data.addToCartImage.childImageSharp.fluid

  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer
        selectedProductCategory="Comiket"
      >
        <div
          css={containerNoPadding}
          className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12"
        >
          <FilterProductCategory filterName="productType" filterList={["Playmat", "Sleeve"]}/>
        </div>
        <div
          css={productContainer}
          className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12"
        >
          <div css={productCategoryHeaderContainer}>
            <div css={productCategoryHeader}>Comiket</div>
            <div css={productHeaderSubtitleText}>Preorder Date</div>
          </div>
          <div className="row" css={productContentWrapper}>
            {comiketProductData
              // .filter(edge => edge.node.frontmatter[product] > 3000000)
              .map(edge => (
                <ComiketProductCard
                  key={edge.node.frontmatter.asin}
                  cardClassName={cardClassName}
                  asin={edge.node.frontmatter.asin}
                  imgData={edge.node.frontmatter.image.childImageSharp.fluid}
                  price={edge.node.frontmatter.pricings[0].price}
                  productType={edge.node.frontmatter.producttype}
                  eventName={edge.node.frontmatter.eventName}
                  addToCartImageData={addToCartImageData}
                />
              ))}
          </div>
        </div>
      </ProductPageContainer>
    </Container>
  )
}

export default Comiket

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
  padding-top:20px;
  `

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

const productPageContainer = css`
  margin-top: 20px;
  margin-bottom:0px;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`

const productContentWrapper = css`
  margin-top:0;
  margin-left:0;
  margin-right:0;
  padding-left:0;
  padding-right:0;
`

const productContainer = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-top:20px;
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
    addToCartImage: file(relativePath: { eq: "addToCartWhite.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
