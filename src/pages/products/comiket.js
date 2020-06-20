import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'
import ComiketProductCard from '../../components/Comiket/ComiketProductCard'
import FilterProductCategory from '../../components/Products/FilterProductCategory'

const cardClassName = 'row-card'

const Comiket = ({ data, location }) => {
  const comiketProductData = data.comiketProducts.edges
  const comiketEventInfo = data.comiketEventInfo.edges
    .sort((a, b) => (a.node.frontmatter.currentEvent === true ? -1 : 1))
    .slice()

  var currentEventKey = ''
  var eventFilterList = Object.keys(comiketEventInfo).map(function(edge) {
    const comiketEventInfoEdge = comiketEventInfo[edge].node.frontmatter
    if (comiketEventInfoEdge.currentEvent) {
      currentEventKey = comiketEventInfoEdge.eventName
    }
    return comiketEventInfoEdge.eventName
  })

  const productTypeFilterList = ['All', 'Playmat', 'Sleeves']
  const [productTypeFilterItem, setProductTypeFilterItem] = useState('All')
  const [currentEventFilterListItem, setCurrentEventFilterListItem] = useState(
    currentEventKey
  )

  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Comiket">
        <div
          css={containerNoPadding}
          className={'col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12'}
        >
          <div css={filterContainer} className='stickyFilter'>
            <FilterProductCategory filterName="Product Type">
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
            <FilterProductCategory filterName="Event">
              {eventFilterList.map(filterItem => (
                <div
                  key={filterItem}
                  className={
                    filterItem === currentEventFilterListItem
                      ? 'productCategoryFilterSelected'
                      : ''
                  }
                  css={filterListItem}
                  onClick={() => {
                    setCurrentEventFilterListItem(filterItem)
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
            <div css={productCategoryHeader}>{currentEventFilterListItem}</div>
            <div css={productHeaderSubtitleText}>Preorder Date</div>
          </div>
          <div className="row" css={productContentWrapper}>
            {comiketProductData
              .filter(edge => {
                return productTypeFilterItem !== 'All'
                  ? edge.node.frontmatter.producttype === productTypeFilterItem
                  : true
              })
              .filter(edge => {
                return currentEventFilterListItem !== ''
                  ? edge.node.frontmatter.eventName ===
                      currentEventFilterListItem
                  : true
              })
              .map(edge => (
                <ComiketProductCard
                  key={edge.node.frontmatter.asin}
                  cardClassName={cardClassName}
                  asin={edge.node.frontmatter.asin}
                  imgData={edge.node.frontmatter.image.childImageSharp.fluid}
                  price={edge.node.frontmatter.pricings[0].price}
                  productType={edge.node.frontmatter.producttype}
                  eventName={edge.node.frontmatter.eventName}
                  url={'/products' + edge.node.fields.slug}
                />
              ))}
          </div>
        </div>
      </ProductPageContainer>
    </Container>
  )
}

export default Comiket

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
          fields {
            slug
          }
        }
      }
    }
    comiketEventInfo: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/comiket-events/" } }
    ) {
      edges {
        node {
          frontmatter {
            eventName
            eventDesc
            currentEvent
            preorder
            receive
          }
        }
      }
    }
  }
`
