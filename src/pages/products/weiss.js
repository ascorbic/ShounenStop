import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'
import FilterProductCategory from '../../components/Products/FilterProductCategory'
import WeissProductCard from '../../components/Weiss/WeissProductCard'
// import WeissLandingProductCard from '../../components/Weiss/WeissLandingProductCard'

const Weiss = ({ data, location }) => {
  const weissProductData = data.weissProducts.edges
  // const comiketEventInfo = data.comiketEventInfo.edges
  //   .sort((a, b) => (a.node.frontmatter.currentEvent === true ? -1 : 1))
  //   .slice()

  // var currentEventKey = ''
  // var eventFilterList = Object.keys(comiketEventInfo).map(function(edge) {
  //   const comiketEventInfoEdge = comiketEventInfo[edge].node.frontmatter
  //   if (comiketEventInfoEdge.currentEvent) {
  //     currentEventKey = comiketEventInfoEdge.eventName
  //   }
  //   return comiketEventInfoEdge.eventName
  // })
  var productTypeFilterList = ['All']
  weissProductData.map(edge => {
    const curProductType = edge.node.frontmatter.producttype
    if (!productTypeFilterList.includes(curProductType)) {
      productTypeFilterList.push(curProductType)
    }
  })

  var seriesFilterList = ['All']
  weissProductData.map(edge => {
    const curSeries = edge.node.frontmatter.series
    if (!seriesFilterList.includes(curSeries)) {
      seriesFilterList.push(curSeries)
    }
  })

  const [productTypeFilterItem, setProductTypeFilterItem] = useState('All')
  const [seriesFilterItem, setSeriesFilterItem] = useState('All')

  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Weiss">
        <div
          css={containerNoPadding}
          className={'col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12'}
        >
          <div css={filterContainer} className="stickyFilter">
            <FilterProductCategory filterName="Product Type"
            currentFilter={productTypeFilterItem}>
              {productTypeFilterList.map(filterItem => (
                <div
                  key={filterItem}
                  className={
                    filterItem === productTypeFilterItem
                      ? 'productCategoryFilterSelected'
                      : ''
                  }
                  css={filterListItem}
                  onClick={() => {
                    setProductTypeFilterItem(filterItem)
                  }}
                >
                  {filterItem}
                </div>
              ))}
            </FilterProductCategory>
            <FilterProductCategory filterName="Series"
            currentFilter={seriesFilterItem}
            >
              {seriesFilterList.map(filterItem => (
                <div
                  key={filterItem}
                  className={
                    filterItem === seriesFilterItem
                      ? 'productCategoryFilterSelected'
                      : ''
                  }
                  css={filterListItem}
                  onClick={() => {
                    setSeriesFilterItem(filterItem)
                  }}
                >
                  {filterItem}
                </div>
              ))}
            </FilterProductCategory>
          </div>
        </div>
        <div
          css={productContainer}
          className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12"
        >
          <div css={productCategoryHeaderContainer}>
            <div css={productCategoryHeader}></div>
            <div css={productHeaderSubtitleText}></div>
          </div>
          <div className="row" css={productContentWrapper}>
            {weissProductData
              .filter(edge => {
                return productTypeFilterItem !== 'All'
                  ? edge.node.frontmatter.producttype === productTypeFilterItem
                  : true
              })
              .filter(edge => {
                return seriesFilterItem !== 'All'
                  ? edge.node.frontmatter.series === seriesFilterItem
                  : true
              })
              .map(edge => {
                console.log(edge)
                return (
                  <WeissProductCard
                    displayName={edge.node.frontmatter.displayName}
                    productType={edge.node.frontmatter.producttype}
                    key={edge.node.frontmatter.asin}
                    imgData={edge.node.frontmatter.image.childImageSharp.fluid}
                    url={'/products' + edge.node.fields.slug}
                  />
                  // <WeissProductCard
                  //   key={edge.node.frontmatter.asin}
                  //   asin={edge.node.frontmatter.asin}
                  //   imgData={edge.node.frontmatter.image.childImageSharp.fluid}
                  //   price={edge.node.frontmatter.pricings[0].price}
                  //   productType={edge.node.frontmatter.producttype}
                  //   eventName={edge.node.frontmatter.eventName}
                  //   url={'/products' + edge.node.fields.slug}
                  // />
                )
              })}
          </div>
        </div>
      </ProductPageContainer>
    </Container>
  )
}

export default Weiss

const filterContainer = css``

const filterListItem = css`
  border-radius: 6px;
  font-family: lato;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  color: #444;
  cursor: pointer;
  border-left: solid 2px #fff;
  transition: all 0.2s ease-in-out;
  &:hover,
  active {
    background-color: #f0f7ff;
  }
`

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
  padding-top: 5px;
`

const productCategoryHeader = css`
  float: left;
  color: #0f346c;
  font-size: 30px;
  font-family: varela round;
`

const productHeaderSubtitleText = css`
  width: 50%;
  clear: left;
  color: #0f346c;
  font-size: 15px;
  font-family: varela round;
`

const productCategoryHeaderContainer = css`
  position: relative;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`

const productPageContainer = css`
  margin-top: 20px;
  margin-bottom: 0px;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const productContentWrapper = css`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
`

const productContainer = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
`

export const WeissProductCategoryQuery = graphql`
  query WeissProductCategoryQuery {
    weissProducts: allMarkdownRemark(
      filter: { frontmatter: { merchandise: { eq: "weiss" } } }
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
          fields {
            slug
          }
        }
      }
    }
  }
`
